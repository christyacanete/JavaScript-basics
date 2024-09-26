import { Circle } from './drawCircle.js';

document.addEventListener("DOMContentLoaded", function(event){

/************************* Variables ***************************/
    let socket = io();
	let message = document.getElementById('message');
    let users = document.getElementById('users');
	let messageArea = document.getElementById("messageArea");

    let username = prompt('Enter your name:');

    let color = "#CCE8CC";
    let x;
    let y;

    let yellow_btn = document.getElementById("yellow-btn");
    let green_btn = document.getElementById("green-btn");
    let blue_btn = document.getElementById("blue-btn");
    let purple_btn = document.getElementById("purple-btn");
    let reset_btn = document.getElementById("reset-btn");
    let circle = document.getElementById("container");

    const newCircle = new Circle();

/*************************** End *****************************/

/***************** Attache events on buttons *****************/

    yellow_btn.addEventListener("click", function(){
        color = "#faf258";
    });
    green_btn.addEventListener("click", function(){
        color = "#CCE8CC"; 
    });
    blue_btn.addEventListener("click", function(){
        color = "#50b3f5"; 
    });
    purple_btn.addEventListener("click", function(){
        color = "#b379da"; 
    });
    reset_btn.addEventListener("click", function(){
        location.reload();
    });

/*************************** End *****************************/

/**************** Emit and listen for events *****************/
    if(username){
        socket.emit('newUser', username);
    }
    socket.on('activeUsers', (activeUsers) => {
        $('#message').text('');
        for(let i=0; i<activeUsers.length; i++){
            $('#message').append(`<p id='users'>${activeUsers[i]}</p>`);
        }
        console.log($('#message').text());
    });

    document.getElementById("container").addEventListener("click", function(event){
        let obj = {
            name: username,
            color: color,
            x : event.clientX,
            y : event.clientY,
            width: Math.floor(Math.random() * 200) + 1
        }
        newCircle.addCircle(obj.x, obj.y, obj.color, obj.width, obj.name);
        socket.emit('draw circle', obj);
    });
    socket.on('draw circle', (obj) => {
        //newCircle.yellow();
        newCircle.addCircle(obj.x, obj.y, obj.color, obj.width, obj.name);
    });
    console.log(newCircle);
});

/*************************** End *****************************/