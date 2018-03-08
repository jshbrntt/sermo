import { MESSAGE_SEND, MESSAGE_SENT, MESSAGE_RECEIVED } from '../actions/messages'

const messages = (state = [], action) => {
  const { type, ...message } = action
  switch (action.type) {
    case MESSAGE_SEND:
      return [
        ...state,
        message
      ]
    case MESSAGE_SENT:
      let lastMessage = state[state.length - 1]
      return [
        ...state.slice(0, -1),
        {
          ...lastMessage,
          metadata: {
            ...lastMessage.metadata,
            sent: true
          }
        }
      ]
    case MESSAGE_RECEIVED:
      return [
        ...state,
        message
      ]
    default:
      return state
  }
}

export default messages
