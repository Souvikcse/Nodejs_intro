const express = require('express')
const server = express();

const m1 = function(req, res, next){
    console.log("We are in middleware 1");
    next();
}
const m2 = function(req, res, next){
    console.log("We are in middleware 2");
    next();
}

server.use(m1);

server.use('/a', m2);

server.get('/a', function(req, res, next){
    res.send("Hello world")
})

server.use((req, res) => {res.send('<h1>404 error: Not found</h2>')})

server.listen(9701);