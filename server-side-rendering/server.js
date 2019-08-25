const express = require('express')
const srv = express();
const todo_routes = require('./routes/todos');

srv.use(express.json());
srv.use(express.urlencoded({extended: true}));

srv.use('/todos', todo_routes);
srv.set('view engine', 'hbs');
srv.set('views', __dirname + '/views');

srv.listen(9700);