const { request } = require("express");
const path = require('path');
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/stylesheets"));

app.listen(8000, function() {
    console.log("listening on port 8000");
})