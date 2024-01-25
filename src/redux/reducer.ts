import { combineReducers } from 'redux'
import appInfoReducer from './AppInfo/slice'
import musicReducer from './Music/slice'
import type { AppInfoType } from './AppInfo/types'
import uiLogInReducer from './Login/reducer/uiLogInReducer'
import infor from './Login/reducer/inforReducer'
import commentReducer from './Comment/reducer/commentReducer'
import postReducer from './Post/reducer/postReducer'
import { likeReducer } from './Like/reducer/likeReducer'

export interface ApplicationState {
  appInfo: AppInfoType
}

const rootReducer = combineReducers({
  appInfoReducer,
  musicReducer,
  modalLogIn: uiLogInReducer,
  persinalInfor: infor,
  commentReducer: commentReducer,
  postReducer: postReducer,
  likeReducer: likeReducer
})

export default rootReducer
