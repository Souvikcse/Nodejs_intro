const express = require('express')
const app = express()
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')

app.use('/pages', require('./routes/pages'))
app.use('/api', require('./routes/api'))
app.use('/', express.static(__dirname + '/public'))

app.listen(9700);