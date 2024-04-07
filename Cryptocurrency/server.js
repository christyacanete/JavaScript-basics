const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/stylesheets'));
app.use(express.static(__dirname + '/images'));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
app.get('/cryptocurrency', function(req, res) {
    res.render("cryptocurrency");
});
app.get('/finance-platforms', function(req, res) {
    res.render("finance_platforms");
});
app.get('/exchange', function(req, res) {
    res.render("exchange");
});
app.get('/coins', function(req, res){
    axios.get('https://api.coingecko.com/api/v3/search')
    .then(data => {
        res.json(data.data.coins);
    })
    .catch(error => {
        res.json(error);
    })
});
app.get('/finance', function(req, res){
    axios.get('https://api.coingecko.com/api/v3/asset_platforms')
    .then(data => {
        res.json(data.data);
    })
    .catch(error => {
        res.json(error);
    })
});
app.get('/exchanges', function(req, res){
    axios.get('https://api.coingecko.com/api/v3/exchanges')
    .then(data => {
        res.json(data.data);
    })
    .catch(error => {
        res.json(error);
    })
});

app.listen(8000, function() {
    console.log("Listening on port 8000.");
});