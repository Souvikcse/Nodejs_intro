const express = require('express')
const app = express();
const db = require('./db')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')
app.get('/', (req, res) => {
    db.getpersons()
    .then((persons) => {
        res.render('persons', {persons})
    }).catch((err) => {
        res.send(err)
    })
})

app.get('/add', (req, res) => {
    res.render('add_persons')
})
app.post('/add', (req, res) => {
    db.addPerson(req.body.name, req.body.age, req.body.city)
    .then(() => {
        res.redirect('/')
    })
    .catch((err) =>{
        res.send(err)
    })
})

app.listen(9700);