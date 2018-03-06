import { MESSAGE_SEND, MESSAGE_SENT, MESSAGE_RECEIVED } from '../actions/chat'

const initialState = {
  content: '',
  messages: []
}

const chat = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_SEND:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            key: state.messages.length,
            content: action.content,
            status: 'sending'
          }
        ]
      }
    case MESSAGE_SENT:
      let lastMessage = state.messages[state.messages.length - 1]
      return {
        ...state,
        messages: [
          ...state.messages.slice(0, -1),
          {
            ...lastMessage,
            status: 'sent'
          }
        ]
      }
    case MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            key: state.messages.length,
            content: action.content,
            status: 'received'
          }
        ]
      }
    default:
      return state
  }
}

export default chat
