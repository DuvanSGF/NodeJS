const express = require('express');
const colors = require('colors');
const server = express();

server.get('/', function (req, res){
    res.send('<h1> Welcome to my page from NodeJS </h1>');
    res.end();
});

server.listen(3000, function(){
    console.log('Server listening on port 127.0.0.1:3000'.red);
});