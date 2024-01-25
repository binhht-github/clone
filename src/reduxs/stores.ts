import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducers'

const middleware=[thunk]

export const stores = configureStore({
    reducer: rootReducer
  })