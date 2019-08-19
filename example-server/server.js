const express = require('express');
const server = express()

server.get('/greet/:tod', function(req, res, next){
    let day='Monday';
    if(req.params.tod === 'morning')
        day = 'Morning';
    else if(req.params.tod === 'evening')
        day='Evening';

    let greeting= 'Good '+ day + ', '+ req.query.name;
    res.send(greeting)

})

server.listen(9700)