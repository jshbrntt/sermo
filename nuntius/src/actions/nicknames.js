
export const SET_NICKNAME = 'SET_NICKNAME'

export const setNickname = (id, nickname) => {
  return dispatch => {
    dispatch({
      type: SET_NICKNAME,
      id,
      nickname
    })
  }
}
