// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// create route object to store file path and content type
const routes = {
    '/' : {filePath: './views/index.html', contentType: 'text/html'},
    '/movies' : {filePath: './views/movies.html', contentType: 'text/html'},
    '/theaters' : {filePath: './views/theaters.html', contentType: 'text/html'},
    '/movies/new' : {filePath: './views/movie-new.html', contentType: 'text/html'},
    '/stylesheets/style.css' : {filePath: './stylesheets/style.css', contentType: 'text/css'},
    '/movies/stylesheets/style.css' : {filePath: './stylesheets/style.css', contentType: 'text/css'},
    '/images/movie-1.jpg' : {filePath: './images/movie-1.jpg', contentType: 'image/jpg'},
    '/images/movie-2.jpg' : {filePath: './images/movie-2.jpg', contentType: 'image/jpg'},
    '/images/movie-3.jpg' : {filePath: './images/movie-3.jpg', contentType: 'image/jpg'},
    '/images/movie-4.jpg' : {filePath: './images/movie-4.jpg', contentType: 'image/jpg'},
    '/images/theater-1.jpg' : {filePath: './images/theater-1.jpg', contentType: 'image/jpg'},
    '/images/theater-2.jpg' : {filePath: './images/theater-2.jpg', contentType: 'image/jpg'},
    '/images/theater-3.jpg' : {filePath: './images/theater-3.jpg', contentType: 'image/jpg'},
    '/images/theater-4.jpg' : {filePath: './images/theater-4.jpg', contentType: 'image/jpg'}
};
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', routes[request.url]);
    console.log('request-url: ',request.url);
    // this is how we do routing:
    if(routes[request.url]) {
        fs.readFile(routes[request.url].filePath, function (errors, contents){
            response.writeHead(200, {'Content-Type': routes[request.url].contentType});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7890);
// print to terminal window
console.log("Running in localhost at port 7890");