const http = require('http');

const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead(404, { 'content-type': 'text/html'});
    res.write('<h1> Bienvenido a mi NodeJS Server');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server listening on port 127.0.0.1:3000'.yellow);
    console.log('Thanks for heaving Me!'.yellow);
})
