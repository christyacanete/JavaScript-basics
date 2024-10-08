var express = require("express");

var app = express();
// console.log("Let's find out what app is", app);
// // use app's get method and pass it the base route '/' and a callback
// app.get('/', function(request, response) {
//     // just for fun, take a look at the request and response objects
//    console.log("The request object", request);
//    console.log("The response object", response);
//    // use the response object's .send() method to respond with an h1
//    response.send("<h1>Hello Express</h1>");
// })

//app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})