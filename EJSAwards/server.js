const { request } = require("express");
const path = require('path');
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/stylesheets"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/awards", function (request, response){
    response.render('awards');
})

app.get("/php-exam", function (request, response){
    var detail = {
        title: 'PHP', 
        img: 'php.png', 
        award: ['PHP', 'CodeIgniter', 'Ajax', 'JQuery']
    };
    response.render('details', {details: detail});
})

app.get("/js-exam", function (request, response){
    var detail = {
        title: 'JavaScript', 
        img: 'JavaScript.png', 
        award: ['Node JS', 'Express', 'Socket.io', 'Framework']
    };
    response.render('details', {details: detail});
})

app.get("/html-exam", function (request, response){
    var detail = {
        title: 'HTML', 
        img: 'HTML.png', 
        award: ['HTML', 'CSS', 'SQL & ERD', 'Bootstrap']
    };
    response.render('details', {details: detail});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});