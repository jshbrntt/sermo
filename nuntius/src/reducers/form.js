import { FORM_INPUT_CHANGED, FORM_CLEAR_INPUT } from '../actions/form'

const initialState = {
  input: ''
}

const form = (state = initialState, action) => {
  switch (action.type) {
    case FORM_INPUT_CHANGED:
      return {
        ...state,
        input: action.input
      }
    case FORM_CLEAR_INPUT:
      return {
        ...state,
        input: ''
      }
    default:
      return state
  }
}

export default form
