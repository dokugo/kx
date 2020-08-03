import { combineReducers } from 'redux'

import carsReducer from './cars/reducer'

const rootReducer = combineReducers({
  cars: carsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
