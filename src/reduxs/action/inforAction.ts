import { CAP_NHAT_EMAIL, LOG_IN } from "../reducer/inforReducer";
import { login } from "../../api/user";

export const logIn = (email = '', passWord = '') => async dispatch => {
    console.log('login action ', email, ' ', passWord, ' abc');
    try {
        const result = await login(email);
        console.log('result ', result.data[0]);
        dispatch({
            type: LOG_IN,
            id: result.data[0].id,
            email: result.data[0].email,
            userName: result.data[0].userName,
            passWord: result.data[0].passWord,
            avtSrc: result.data[0].avtSrc,
        })
    } catch (error) {

    }
    console.log('da cap nhat len server');
}
export const logInByAsyncStorage = (userItem = {}) => async dispatch => {
    try {
        if (userItem != null) {
            dispatch({
                type: LOG_IN,
                id: userItem.id,
                email: userItem.email,
                userName: userItem.userName,
                passWord: userItem.passWord,
                avtSrc: userItem.avtSrc,
            })
        }
    } catch (error) {

    }
    console.log('da cap nhat len server');
}
export const updateEmail = (email = '') => async dispatch => {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000)
        })
        dispatch({
            type: CAP_NHAT_EMAIL,
            email: email
        })
    } catch (error) {

    }
    console.log('da cap nhat len server');
}