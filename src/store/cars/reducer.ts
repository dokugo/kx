import { customAlphabet } from 'nanoid'

import ActionTypes, { Actions } from './actionTypes'
import { Car, CarColor, CarStatus } from './types'
import { validate } from './utils'

const alphabet = '0123456789'
const nanoid = customAlphabet(alphabet, 24)

interface State {
  form: Car
  table: Car[]
  isInvalidFormData: boolean
  isLoading: boolean
  isLoadingError: boolean
}

const initState: State = {
  form: {
    color: CarColor.Unset,
    description: '',
    id: nanoid(),
    price: '',
    status: CarStatus.Unset,
    title: '',
    year: '',
  },
  table: [],
  isInvalidFormData: false,
  isLoading: false,
  isLoadingError: false,
}

const reducer = (state: State = initState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.UPDATE_TEXT_FIELD: {
      const { type, text } = action.payload
      return {
        ...state,
        form: { ...state.form, [type]: text },
        isInvalidFormData: false,
      }
    }

    case ActionTypes.SET_COLOR: {
      return {
        ...state,
        form: { ...state.form, color: action.payload },
        isInvalidFormData: false,
      }
    }

    case ActionTypes.SET_STATUS: {
      return {
        ...state,
        form: { ...state.form, status: action.payload },
        isInvalidFormData: false,
      }
    }

    case ActionTypes.ADD_CAR: {
      const isValid = validate(state.form)

      if (isValid) {
        return {
          ...state,
          table: [...state.table, { ...state.form, id: nanoid() }],
          isInvalidFormData: false,
        }
      }

      return { ...state, isInvalidFormData: true }
    }

    case ActionTypes.GET_CARS: {
      return {
        ...state,
        table: action.payload,
        isLoading: false,
      }
    }

    case ActionTypes.GET_CARS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isLoadingError: false,
      }
    }

    case ActionTypes.GET_CARS_ERROR: {
      console.error(action.payload.message)

      return {
        ...state,
        isLoading: false,
        isLoadingError: true,
      }
    }

    case ActionTypes.REMOVE_CAR: {
      const newTable = state.table.filter((item) => item.id !== action.payload)

      return {
        ...state,
        table: newTable,
        isLoadingError: false,
      }
    }

    default:
      return state
  }
}

export default reducer
