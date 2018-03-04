const process = require('process')
const { ReferoServer } = require('./server')

const server = new ReferoServer()
server.listen(process.env['PORT'])
