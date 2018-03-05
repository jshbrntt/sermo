const debug = require('debug')('refero:ReferoServer')
const io = require('socket.io')

class ReferoServer {
  constructor () {
    this._io = io()
    this._sockets = new Map()
    this._setup()
  }
  _setup () {
    this._io.on('connection', this._onConnection.bind(this))
  }
  _onConnection (socket) {
    this._sockets.set(socket.id, socket)
    socket.broadcast.emit('connected', { id: socket.id })
    socket.on('disconnect', this._onDisconnect.bind(this, socket))
    socket.on('message', this._onMessage.bind(this, socket))
    debug(`${socket.id}: connected`)
  }
  _onDisconnect (socket) {
    this._sockets.delete(socket.id)
    socket.broadcast.emit('disconnected', { id: socket.id })
    debug(`${socket.id}: disconnected`)
  }
  _onMessage (socket, data) {
    socket.broadcast.emit('message', { id: socket.id, content: data })
    debug(`${socket.id}: message`)
    debug(data)
  }
  listen (port = 3000) {
    this._port = port
    this._io.listen(this._port)
    debug(`listening on port ${this._port}`)
  }
}

module.exports = { ReferoServer }
