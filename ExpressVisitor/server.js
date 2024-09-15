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

// Static content
app.use(express.static(__dirname + "/stylesheets"));

// Setting up ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Root route to render the index.ejs view
app.get('/', function(req, res) {
    if(req.session.views){
        req.session.views++;
    }
    else{
        req.session.views = 1;
    }
    let data = {
        message: req.session.views % 2 === 0 ? "Even flowers need rain!" : "Beat the odds!",
        views: req.session.views
    }
    res.render("index", data);
})

app.get('/reset', function(req, res){
    req.session.views = 0;
    res.redirect('/');
})

app.get('/repeat', function(req, res){
    let data = {
        message: req.session.views % 2 === 0 ? "Even flowers need rain" : "Beat the odds",
        views: req.session.views
    }
    res.render("index", data);
})

// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("Listening on port 8000.");
});