// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

// Create the express app
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Static contents
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/stylesheets"));

// Setting up ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
})

// Acess data from form
app.post('/result', function (req, res){
    console.log("POST DATA \n\n", req.body); 

    var detail = {
        'name': req.body.name,
        'course': req.body.course,
        'score': req.body.score,
        'reason': req.body.reason
    }
    
    res.render('result', {details: detail});
});

// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("Listening on port 8000.");
});