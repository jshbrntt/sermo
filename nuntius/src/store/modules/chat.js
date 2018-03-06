import debug from 'debug'

const log = debug('nuntius:chat')
log.log = console.log.bind(console)

export const MESSAGE_SEND = 'chat/MESSAGE_SEND'
export const MESSAGE_SENT = 'chat/MESSAGE_SENT'
export const MESSAGE_RECEIVED = 'chat/MESSAGE_RECEIVED'

const initialState = {
  content: '',
  messages: []
}

export default (state = initialState, action) => {
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

export const sendMessage = (socket, content) => {
  return dispatch => {
    log('nuntius:MESSAGE_SEND', content)
    dispatch({
      type: MESSAGE_SEND,
      content
    })
    socket.emit('message', { content }, data => {
      log('nuntius:MESSAGE_SENT', data)
      dispatch({
        type: MESSAGE_SENT
      })
    })
  }
}

export const receiveMessage = socket => {
  return dispatch => {
    socket.on('message', data => {
      log('nuntius:MESSAGE_RECEIVED', data)
      dispatch({
        type: MESSAGE_RECEIVED,
        content: data.content
      })
    })
  }
}
