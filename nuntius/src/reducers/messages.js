import { MESSAGE_SEND, MESSAGE_SENT, MESSAGE_RECEIVED } from '../actions/messages'

const messages = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_SEND:
      return [
        ...state,
        {
          content: action.content,
          status: 'sending'
        }
      ]
    case MESSAGE_SENT:
      let lastMessage = state[state.length - 1]
      return [
        ...state.slice(0, -1),
        {
          ...lastMessage,
          status: 'sent'
        }
      ]
    case MESSAGE_RECEIVED:
      return [
        ...state,
        {
          content: action.content,
          status: 'received'
        }
      ]
    default:
      return state
  }
}

export default messages
