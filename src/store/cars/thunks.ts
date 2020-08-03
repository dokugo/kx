import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'store/rootReducer'

import { getCars, getCarsError, getCarsLoading } from './actions'
import { Actions } from './actionTypes'
import { ApiClient } from './api'

type Thunk = ThunkDispatch<RootState, undefined, Actions>

export const requestCars = () => async (dispatch: Thunk): Promise<void> => {
  try {
    dispatch(getCarsLoading())
    const payload = await ApiClient.get()
    dispatch(getCars(payload))
  } catch (error) {
    dispatch(getCarsError(error))
  }
}
