// Dependencies
var express = require("express");
var path = require("path");
var session = require("express-session");
var bodyParser = require('body-parser');

// Create the express app
var app = express();

// Create the session app
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));

// Static contents
app.use(express.static(__dirname + "/stylesheets"));
app.use(express.static(__dirname + "/images"));

// Setting up ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Root route to render the index.ejs view
app.get('/', function(req, res) {
    if(req.session.counter){
        req.session.counter;
    }
    else {
        req.session.counter = 10;
    }
    let data = {counter: req.session.counter}
    res.render("index", data);
})

// Get form data
app.post('/', function (req, res){
    var detail = {
        'username': req.body.name,
        'couponNum': Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000
    }  
    if(req.body.claim){
        (req.session.counter !== 0) ? res.redirect('/') : res.render('unavailable');
    }
    else if(req.body.reset){
        req.session.counter = 10;
        res.redirect('/');
    }
    else if(req.body.name){
        req.session.counter--;
        res.render('claim', {details: detail});
    }
    else {
        res.redirect('/');
    }
});

// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("Listening on port 8000.");
});