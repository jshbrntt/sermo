import { SET_NICKNAME } from '../actions/nicknames'

const initialState = {
  me: 'Anonymous',
  them: 'Anonymous'
}

const nicknames = (state = initialState, action) => {
  switch (action.type) {
    case SET_NICKNAME:
      if (action['id'] && action['nickname']) {
        return {
          ...state,
          [action.id]: action.nickname
        }
      }
      return state
    default:
      return state
  }
}

export default nicknames
