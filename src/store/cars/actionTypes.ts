import { Car, CarColor, CarStatus, TextField } from './types'

enum ActionTypes {
  UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD',
  SET_STATUS = 'SET_STATUS',
  SET_COLOR = 'SET_COLOR',
  ADD_CAR = 'ADD_CAR',
  GET_CARS = 'GET_CARS',
  GET_CARS_LOADING = 'GET_CARS_LOADING',
  GET_CARS_ERROR = 'GET_CARS_ERROR',
  REMOVE_CAR = 'REMOVE_CAR',
}

type updateTextField = {
  type: typeof ActionTypes.UPDATE_TEXT_FIELD
  payload: {
    type: TextField
    text: string
  }
}

type setColor = {
  type: typeof ActionTypes.SET_COLOR
  payload: CarColor
}

type setStatus = {
  type: typeof ActionTypes.SET_STATUS
  payload: CarStatus
}

type addCar = {
  type: typeof ActionTypes.ADD_CAR
}

type getCars = {
  type: typeof ActionTypes.GET_CARS
  payload: Car[]
}

type getCarsLoading = {
  type: typeof ActionTypes.GET_CARS_LOADING
}

type getCarsError = {
  type: typeof ActionTypes.GET_CARS_ERROR
  payload: Error
}

type removeCar = {
  type: typeof ActionTypes.REMOVE_CAR
  payload: Car['id']
}

export default ActionTypes

export type Actions =
  | updateTextField
  | setColor
  | setStatus
  | addCar
  | getCars
  | getCarsLoading
  | getCarsError
  | removeCar
