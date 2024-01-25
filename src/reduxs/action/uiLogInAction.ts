import { CAP_NHAT_EMAIL,LOG_IN } from "../reducer/inforReducer";
import { login } from "../../api/user";

import { UI_LOGIN_STATE_OPEN,UI_LOGIN_STATE_CLOSE } from "../reducer/loginReducer";


export const uiLogInActionOpen = () => async dispatch =>{
    try {
        dispatch({
            type:UI_LOGIN_STATE_OPEN,
            modalVisible:true
        })
    } catch (error) {
        
    }
}
export const uiLogInActionClose = () => async dispatch =>{
    try {
        dispatch({
            type:UI_LOGIN_STATE_CLOSE,
            modalVisible:false
        })
    } catch (error) {
        
    }
}
