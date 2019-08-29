const route = require('express').Router()
const db = require('../db')

route.get('/', (req, res) => {
    db.getpersons()
    .then((persons) => {
        res.render('persons', {persons})
    })
    .catch((err) => {
        res.send(err)
    })
})

route.get('/add', (req, res) => {
    res.render('add_persons')
})

route.post('/add', (req, res) => {
    db.addPerson(req.body.name, req.body.age, req.body.city)
    .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = route;