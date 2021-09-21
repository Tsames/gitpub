const express = require('express');
const port = 2999;
const app = express();
const drinks = require('./models/drinks')

app.get('', (req, res) => {
    res.send('Welcome to the Github App!');
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})