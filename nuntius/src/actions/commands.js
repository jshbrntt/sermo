export const SENT_COMMAND = 'SENT_COMMAND'
export const RECEIVED_COMMAND = 'RECEIVED_COMMAND'
export const COMMAND_NICK = 'nick'

export const sendCommand = (socket, command, args) => {
  return dispatch => {
    dispatch({
      type: SENT_COMMAND,
      command,
      args
    })
    socket.emit('command', {
      command,
      args
    })
  }
}

export const receiveCommand = socket => {
  return dispatch => {
    socket.on('command', data => {
      dispatch({
        ...data,
        type: RECEIVED_COMMAND
      })
    })
  }
}
