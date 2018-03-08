import { sendMessage, removeLastMessage } from './messages'

export const SENT_COMMAND = 'SENT_COMMAND'
export const RECEIVED_COMMAND = 'RECEIVED_COMMAND'
export const COMMAND_NICK = 'nick'
export const COMMAND_THINK = 'think'
export const COMMAND_OOPS = 'oops'

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
    switch (command) {
      case COMMAND_THINK:
        sendMessage(socket, args.join(' '), { think: true })(dispatch)
        break
      case COMMAND_OOPS:
        removeLastMessage()(dispatch)
        break
      default:
        window.alert(`Command '${command}' not implemented.`)
    }
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
