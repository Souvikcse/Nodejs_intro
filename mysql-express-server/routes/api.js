const route = require('express').Router()
const db = require('../db')

route.get('/persons/', (req, res) => {
    db.getpersons()
    .then((persons) => {res.send(persons)})
    .catch((err) => {res.send(err)})
})

route.post('/persons/', (req, res) => {
    db.addPerson(req.body.name, req.body.age, req.body.city)
    .then(() => {
        res.redirect('/api/')
    })
    .catch((err) => {res.send(err)})
})

module.exports = route