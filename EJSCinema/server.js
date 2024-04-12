const { request } = require("express");
const path = require('path');
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/stylesheets"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/movies", function (request, response){
    response.render('movies');
})
app.get("/theaters", function (request, response){
    response.render('theaters');
})
app.get("/form", function (request, response){
    response.render('form');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})