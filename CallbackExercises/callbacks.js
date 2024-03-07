/************************************************************
 
1. Create a function that takes another function as its argument.  Have the function execute the passed function.
2. Create a function that returns a function.  Have the returned function be executed.
3. Create a function that takes two functions as its arguments.  Randomly, either execute the first function or the second function.

*************************************************************/
let movie_title = "'Avengers: Endgame'";

function favMovie(callback){
    console.log("Your favorite movie", callback());
}

function play(){
    return movie_title + " is now playing...";
}

function pause(){
    return movie_title + " is paused.";
}

function show(){
    console.log("Showing title of the movie: ");
    return movie = (function() {
        console.log(movie_title);
    });
}

function activity(act1, act2){
    function randomize(){
        return Math.floor(Math.random() * 2);
    }
    if(randomize() === 0){
        console.log(act1());
    } 
    else{
        console.log(act2());
    }
}

// Test
favMovie(play);
favMovie(pause);

let showTitle = show();
showTitle();

activity(pause, play);