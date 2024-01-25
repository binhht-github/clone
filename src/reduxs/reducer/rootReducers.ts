import {combineReducers} from 'redux'
import infor from './inforReducer'
import uiLogIn from './loginReducer'

const rootReducer = combineReducers({
    persinalInfor: infor
})
export default (state,action)=> rootReducer(state,action)