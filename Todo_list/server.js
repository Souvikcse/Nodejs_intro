const exprss = require('express')
const serv = exprss();

const todo_list = require('./todos');

serv.use(exprss.json());                                         //If the body is in json format then it gets converted to .js file
serv.use(exprss.urlencoded({extended: true}));                   //If the body is in urlencoded format then it gets converted to .js file

serv.use('/todos', todo_list);
serv.listen(9700);