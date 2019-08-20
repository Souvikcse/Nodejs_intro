const route = require('express').Router();

let teachers = [{name: 'Arnav Gupta', topic: 'Web Dev'},
                {name: 'Prateek narang', topic: 'Competitive coding'}
            ];

route.get('/', (req, res) => {res.send(teachers)});
route.get('/add', (req, res) => {
    teachers.push({
        name: req.query.name,
        topic: req.query.subject
    })
    res.send(teachers);
})

route.get('/:id', (req, res) => {res.send(teachers[req.params.id])});

module.exports = route;