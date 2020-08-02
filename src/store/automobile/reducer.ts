import ActionTypes, { Actions } from './actionTypes'
import { CarColor, CarStatus } from './types'

interface State {
  title: string
  year: string
  price: string
  description: string
  color: CarColor
  status: CarStatus
}

const initState: State = {
  title: '',
  year: '',
  price: '',
  description: '',
  color: CarColor.Unset,
  status: CarStatus.Unset,
}

const reducer = (state: State = initState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.UPDATE_TEXT_FIELD: {
      const { type, text } = action.payload
      return {
        ...state,
        [type]: text,
      }
    }

    case ActionTypes.SET_COLOR: {
      return {
        ...state,
        color: action.payload,
      }
    }

    case ActionTypes.SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      }
    }

    case ActionTypes.SUBMIT_FORM: {
      console.log(state)
      return {
        ...state,
      }
    }

    default:
      return state
  }
}

export default reducer
