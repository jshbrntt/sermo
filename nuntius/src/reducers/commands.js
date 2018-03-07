import { SENT_COMMAND, RECEIVED_COMMAND, COMMAND_NICK } from '../actions/commands'

const initialState = {
  nicks: {
    me: 'Anonymous',
    them: 'Anonymous'
  }
}

const commands = (state = initialState, action) => {
  switch (action.command) {
    case COMMAND_NICK:
      switch (action.type) {
        case SENT_COMMAND:
          return {
            ...state,
            nicks: {
              ...state.nicks,
              me: action.args.join(' ')
            }
          }
        case RECEIVED_COMMAND:
          return {
            ...state,
            nicks: {
              ...state.nicks,
              them: action.args.join(' ')
            }
          }
        default:
          return state
      }
    default:
      return state
  }
}

export default commands
