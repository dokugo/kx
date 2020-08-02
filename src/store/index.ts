import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'

const logger = createLogger({
  collapsed: true,
  predicate: () => process.env.NODE_ENV !== 'production',
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
)

export default store
