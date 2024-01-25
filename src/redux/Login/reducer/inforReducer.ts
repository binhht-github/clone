import AsyncStorage from "@react-native-async-storage/async-storage"

export const CAP_NHAT_PASSWORD = "CAP_NHAT_PASSWORD"
export const CAP_NHAT_EMAIL = "CAP_NHAT_EMAIL"
export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"

const initialState = {
    id: '',
    email: "",
    userName: "",
    passWord: "",
    avtSrc: "",
}

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-key', jsonValue);
    } catch (e) {
        // saving error
    }
};

export default function actioInForReducer(state = initialState, payload = {}) {
    switch (payload.type) {
        case LOG_OUT:
            return {
                id: payload.id,
                email: payload.email,
                userName: payload.userName,
                passWord: payload.passWord,
                avtSrc: payload.avtSrc,
            }
        case LOG_IN:
            {
                storeData({
                    id: payload.id,
                    email: payload.email,
                    userName: payload.userName,
                    passWord: payload.passWord,
                    avtSrc: payload.avtSrc,
                })
                return {
                    id: payload.id,
                    email: payload.email,
                    userName: payload.userName,
                    passWord: payload.passWord,
                    avtSrc: payload.avtSrc,
                }
            }
        default: return state
    }
}