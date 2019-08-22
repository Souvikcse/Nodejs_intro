const route = require('express').Router();

let food = [{Type: 'Veg', Item: 'Cheese Pasta'},
            {Type: 'Non-Veg', Item: 'Chicken Burger'}]

route.get('/', (req, res) => {res.send(food)});

route.post('/', (req, res) => {
    food.push({
        Type: req.body.Type, Item: req.body.Item
        })
    res.send(food)
})

module.exports = route;