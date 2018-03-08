import { MESSAGE_SEND, MESSAGE_SENT, MESSAGE_RECEIVED, MESSAGE_REMOVE_LAST } from '../actions/messages'

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
    case MESSAGE_REMOVE_LAST:
      let reversedMessages = [...state].reverse()
      // If 'them' is set on 'action' then remove their last message, instead of mine.
      let lastClientMessage = reversedMessages.find(message => action['them'] ? message['id'] : !message['id'])
      let lastClientMessageIndex = state.indexOf(lastClientMessage)
      if (lastClientMessageIndex < 0) {
        return state
      }
      let newState = [...state]
      newState.splice(lastClientMessageIndex, 1)
      return newState
    default:
      return state
  }
}

export default messages
