const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')
app.get('/', (req, res) => {
    res.render('persons', {
        persons: [{name: 'Souvik', age: 22, city: 'Kolkata'},
                    {name: 'Jitendra', age: 22, city: 'Jadavpur'}]
    })
})

app.get('/add', (req, res) => {
    res.render('add_persons')
})
app.post('/add', (req, res) => {
    
})

app.listen(9700);