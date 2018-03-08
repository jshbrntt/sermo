export const MESSAGE_SEND = 'MESSAGE_SEND'
export const MESSAGE_SENT = 'MESSAGE_SENT'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'

export const sendMessage = (socket, content) => {
  return dispatch => {
    dispatch({
      type: MESSAGE_SEND,
      content
    })
    socket.emit('message', { content }, data => {
      dispatch({
        type: MESSAGE_SENT
      })
    })
  }
}

export const receiveMessage = socket => {
  return dispatch => {
    socket.on('message', data => {
      dispatch({
        ...data,
        type: MESSAGE_RECEIVED
      })
    })
  }
}
