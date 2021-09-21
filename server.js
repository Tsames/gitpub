const express = require('express');
const port = 2999;
const app = express();
const drinks = require('./models/drinks')
const foods = require('./models/food')

for (drink of drinks) {
    drink.image = drink.image.slice(0, -4) + ".png";
}

for (food of foods) {
    food.image = food.image.slice(0, -4) + ".png";
}

app.get('', (req, res) => {
    res.send('Welcome to the Github App!');
})

app.get('/menu', (req, res) => {
    res.render('drinks_index.ejs', {menu: [drinks,foods]});
})

app.get('/drinks/:id', (req,res) => {
    res.render('drinks_show.ejs', {drink : drinks[req.params.id]});
})

app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', { food: foods[req.params.id] });
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})