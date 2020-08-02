import { CarColor, CarStatus, InputTypes } from './types'

enum ActionTypes {
  UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD',
  SET_STATUS = 'SET_STATUS',
  SET_COLOR = 'SET_COLOR',
  SUBMIT_FORM = 'SUBMIT_FORM',
}

type updateTextField = {
  type: typeof ActionTypes.UPDATE_TEXT_FIELD
  payload: {
    type: InputTypes
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

type submitForm = {
  type: typeof ActionTypes.SUBMIT_FORM
  // payload: string
}

export default ActionTypes

export type Actions = updateTextField | setColor | setStatus | submitForm
