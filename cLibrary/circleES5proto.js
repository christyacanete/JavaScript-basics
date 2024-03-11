// Using ES5 with prototype

function Circles(num){
    this.num = num;
}

Circles.prototype.draw_circles = function(canvas){
    let drawCanvas = document.getElementById(canvas);
    for(let i=0; i<this.num; i++){
        drawCanvas.appendChild(this.circle());
    }
}

Circles.prototype.circle = function(){
    var circle = document.createElement("p");
    var radius = Math.floor(Math.random() * 39) + 10;
    
    circle.style.width = radius * 2 + "px";
    circle.style.height = radius * 2 + "px";
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";
    circle.style.top = Math.floor(Math.random() * (window.innerHeight - (radius * 2))) + "px";
    circle.style.left = Math.floor(Math.random() * (window.innerWidth - (radius * 2))) + "px";
    circle.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    circle.style.opacity = Math.random() * (1 - 0.1) + 0.1;
    circle.classList.add("circle");

    var fadeInterval = setInterval(function(){
        var opacity = parseFloat(circle.style.opacity);
        var circleHeight = parseFloat(circle.style.height);
        var circleWidth = parseFloat(circle.style.width);
        opacity -= 0.02;
        circleHeight += 5;
        circleWidth += 5
        if(circleHeight >= 120){
            clearInterval(fadeInterval);
            circle.remove();
        }
        else{
            circle.style.opacity = opacity;
            circle.style.height = circleHeight;
            circle.style.width = circleWidth;
        }
    }, 150);

    return circle;
}
