/***** Declare dependencies *****/
const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;
const path = require("path");

/***** Declare an array to save current active users *****/
let activeUsers = [];

/***** State folder path and set views folder for the ejs file *****/
app.use(express.static(__dirname + "/stylesheets"));
app.use(express.static(__dirname + "/public"));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/***** Render index page *****/
app.get('/', (req, res) => {
	res.render('index');
});

/***** Establish sockets *****/
io.on('connection', (socket) => {
    // Emit everytime a new user joins the room
    socket.on('newUser', (username) => {
        activeUsers.push(username);
        io.emit('activeUsers', activeUsers);
    });

    // Emit everytime one of the users draw a circle
    socket.on('draw circle', (obj) => {
        console.log(obj);
        io.emit('draw circle',obj);
    });
});

server.listen(port, () => {
	console.log(`Server is listening at the port: ${port}`);
});
