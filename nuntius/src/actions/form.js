export const FORM_INPUT_CHANGED = 'FORM_INPUT_CHANGED'
export const FORM_CLEAR_INPUT = 'FORM_CLEAR_INPUT'

export const inputChanged = input => {
  return dispatch => {
    dispatch({
      type: FORM_INPUT_CHANGED,
      input
    })
  }
}

export const clearInput = () => {
  return dispatch => {
    dispatch({
      type: FORM_CLEAR_INPUT
    })
  }
}
