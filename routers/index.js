const srvr= require('express')();

const tchr_route = require('./routes/teachers');
const studnt_route = require('./routes/students');

srvr.use('/teachers', tchr_route);
srvr.use('/students', studnt_route);

srvr.listen(9700);