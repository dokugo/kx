import { combineReducers } from 'redux'

import automobileReducer from './automobile/reducer'

const rootReducer = combineReducers({
  automobile: automobileReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
