// example from http://howtonode.org/hello-node
// Load the http module to create an http server.
const http = require('http')

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
})

const port = process.env.PORT || 1337
server.listen(port)
console.log('Server running at port', port)