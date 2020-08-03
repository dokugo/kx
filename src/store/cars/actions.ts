import ActionTypes, { Actions } from './actionTypes'
import { Car, CarColor, CarStatus, TextField } from './types'

export const updateTextField = (type: TextField, text: string): Actions => {
  return { type: ActionTypes.UPDATE_TEXT_FIELD, payload: { type, text } }
}

export const setColor = (payload: CarColor): Actions => {
  return { type: ActionTypes.SET_COLOR, payload }
}

export const setStatus = (payload: CarStatus): Actions => {
  return { type: ActionTypes.SET_STATUS, payload }
}

export const addCar = (): Actions => {
  return { type: ActionTypes.ADD_CAR }
}

export const getCars = (payload: Car[]): Actions => {
  return { type: ActionTypes.GET_CARS, payload }
}

export const getCarsLoading = (): Actions => {
  return { type: ActionTypes.GET_CARS_LOADING }
}

export const getCarsError = (payload: Error): Actions => {
  return { type: ActionTypes.GET_CARS_ERROR, payload }
}

export const removeCar = (payload: string): Actions => {
  return { type: ActionTypes.REMOVE_CAR, payload }
}
