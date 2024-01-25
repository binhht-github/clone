import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import reducer from './reducer'
import saga from './saga'
import { CREATE_COMMENT } from './Comment/reducer/commentReducer'
import { UPDATE_TYM_CMT } from './Post/reducer/postReducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix: '',
  whitelist: ['appInfoReducer'],
  blacklist: ['musicReducer'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()
// @ts-ignore
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
      //   serializableCheck: {
      //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, CREATE_COMMENT, UPDATE_TYM_CMT],
      //     ignoredPaths: ['payload.createDate', 'payload.postReducer.like.createDate', 'like.createDate', 'payload.like.createDate', 'payload.payload.createDate', 'postReducer.like.createDate', 'items.createDate'],
      //   },
    }).concat(sagaMiddleware),
})
sagaMiddleware.run(saga)
export default store
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState> // A global type to access reducers types
export type AppDispatch = typeof store.dispatch
