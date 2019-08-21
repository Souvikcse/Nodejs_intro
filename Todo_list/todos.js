const route = require('express').Router();

let todos = [{topic: 'Web Dev', status: 'Pending'},
            {topic: 'Functional Programming', status: 'Done'},
            {topic: 'Mathematical aptitude', status: 'Pending'}
                ]

route.get('/', (req, res) => {res.send(todos)});
route.post('/', (req, res) => {
    todos.push({
        topic: req.body.topic,
        status: req.body.status
    })
    res.send(todos)
})
route.get('/:id', (req, res) => {res.send(todos[req.params.id])})
route.delete('/:id', (req, res) => {delete todos[req.params.id]})
route.patch('/:id', (req, res) => {
          todos[req.params.id]={topic: req.body.topic, status: req.body.status}
          })

module.exports = route;