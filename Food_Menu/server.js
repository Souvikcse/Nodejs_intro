const express = require('express');
const servr = express();

const food_menu = require('./routes/menu')

servr.use(express.json());
servr.use(express.urlencoded({extended: true}));

servr.get('/hello', (req, res) => {res.send('<h2>Hello</h2>')});

servr.use('/public', express.static(__dirname + '/public'))
servr.use('/list', food_menu)

servr.listen(9700);
