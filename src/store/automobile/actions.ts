import ActionTypes, { Actions } from './actionTypes'
import { CarColor, CarStatus, InputTypes } from './types'

export const updateTextField = (type: InputTypes, text: string): Actions => {
  return { type: ActionTypes.UPDATE_TEXT_FIELD, payload: { type, text } }
}

export const setColor = (input: CarColor): Actions => {
  return { type: ActionTypes.SET_COLOR, payload: input }
}

export const setStatus = (input: CarStatus): Actions => {
  return { type: ActionTypes.SET_STATUS, payload: input }
}

export const submitForm = (): Actions => {
  return { type: ActionTypes.SUBMIT_FORM }
}
