var Hapi = require('hapi')

// create new server instance
var server = new Hapi.Server()

// add server’s connection information
server.connection({
  port: process.env.PORT || 3000,
  labels: ['api'],
})

// add “hello world” route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello Moto')
  }
})

// start your server
server.start(function (err) {
  if (err) {
    throw err
  }

  console.log('Server running at: ' + server.info.uri)
})