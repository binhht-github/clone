export const CAP_NHAT_PASSWORD ="CAP_NHAT_PASSWORD"
export const CAP_NHAT_EMAIL ="CAP_NHAT_EMAIL"
export const LOG_IN ="LOG_IN"

const initialState = {
    id: '',
    email: "",
    userName: "",
    passWord: "",
    avtSrc: "",
}

export default function actioInForReducer(state = initialState,payload={}){
    switch(payload.type){
        case CAP_NHAT_PASSWORD:
            return{
                ...state,
                passWord : payload.passWord
            }
        case CAP_NHAT_EMAIL:
            return{
                ...state,
                email : payload.email
            }
        case LOG_IN:
            return{
                id: payload.id,
                email: payload.email,
                userName: payload.userName,
                passWord: payload.passWord,
                avtSrc: payload.avtSrc,
            }
            default: return state
    }
}