const route = require('express').Router();

let studnts = [{name: 'Souvik', skills: 'Java', year: 'IV'},
                {name: 'Saksham', skills: 'C++', year: 'III'}
            ]
    
route.get('/', (req, res) => {res.send(studnts)})
route.get('/:id', (req, res) => {res.send(studnts[req.params.id])});

module.exports = route;