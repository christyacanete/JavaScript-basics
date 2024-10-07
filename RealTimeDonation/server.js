// Dependencies
const express = require("express");
const app = express();
const path = require("path");

const server = app.listen(1337);
const io = require('socket.io')(server);

let counter = 100;

app.use(express.static(__dirname + "/stylesheets"));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

io.on('connection', function (socket) { 
    socket.on('updateDonation', data => {
        console.log(data);
        io.emit('updateAllClients', {donation: counter});
    });
});

// Root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index", {donation: counter});
})

app.get('/donate', function(req, res){
    counter += 10;
    console.log(counter);
    res.send({donation: counter});
})

app.get('/redeem', function(req, res){
    counter -= 10;
    res.send({donation: counter});
})



