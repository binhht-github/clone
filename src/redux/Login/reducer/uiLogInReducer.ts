
export const UI_LOGIN_STATE_OPEN= 'UI_LOGIN_STATE_OPEN'
export const UI_LOGIN_STATE_CLOSE= 'UI_LOGIN_STATE_CLOSE'

const initialState = {
    modalVisible:false
}

export default function uiLogInReducer(state = initialState,payload={}){
    switch(payload.type){
        case UI_LOGIN_STATE_OPEN:
            return{
                modalVisible: true
            }
        case UI_LOGIN_STATE_CLOSE:
            return{
                modalVisible: false
            }
            default: return state
    }
}