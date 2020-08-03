import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import Thunk, { ThunkMiddleware } from 'redux-thunk'

import { Actions } from './cars/actionTypes'
import rootReducer, { RootState } from './rootReducer'

const logger = createLogger({
  collapsed: true,
  predicate: () => process.env.NODE_ENV !== 'production',
})

const enhancers = [
  applyMiddleware(Thunk as ThunkMiddleware<RootState, Actions>),
  applyMiddleware(logger),
]

const store = createStore(rootReducer, composeWithDevTools(...enhancers))

export default store
