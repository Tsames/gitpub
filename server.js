const express = require('express');
const port = 2999;
const app = express();
const drinks = require('./models/drinks')

app.get('', (req, res) => {
    res.send('Welcome to the Github App!');
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks : drinks});
})

app.get('/drinks/:id', (req,res) => {
    res.render('drinks_show.ejs', {drink : drinks[req.params.id]});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})