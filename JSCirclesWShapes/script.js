import Circle from "./circle.js";
import Square from "./square.js";
import Star from "./star.js";

document.addEventListener("DOMContentLoaded", function(){
    const class_list = ["green-btn", "blue-btn", "purple-btn"];
    let selected_shape = "circle";
    let selected_class = "green-btn";
    let canvas = document.getElementById("canvas");

    function selectedColor(element){
        for(let i=1; i<=3; i++){
            document.getElementsByClassName("btn")[i-1].classList.remove("selected");
            let shape = document.getElementsByClassName("btn")[i-1];
            if(shape.classList.length > 1){
                shape.classList.remove(shape.classList[1]);
                shape.classList.add(selected_class);
            }
        }
        element.classList.add("selected");
    }

    function selectedShape(selected_shape){
        for(let i=1; i<=3; i++){
            let shape = document.getElementsByClassName("shape")[i-1];
            if(shape.classList.length > 1){
                shape.classList.remove(shape.classList[1]);
                selected_shape.classList.add(selected_class);
            }
        }
    }

    // Add event listener for colors buttons
    for(let i=1; i<=3; i++){
        document.getElementsByClassName("btn")[i-1].addEventListener("click", function(){
            selected_class = class_list[i-1];
            selectedColor(this);
        });
    }

    // Add event listener for shape options
    for(let i=1; i<=3; i++){
        document.getElementsByClassName("shape")[i-1].addEventListener("click", function(){
            selected_shape = this.getAttribute("id");
            selectedShape(this);
            console.log(this);
        });
    }

    // Add event listener for reset button
    document.getElementById("reset").addEventListener("click", function(event){
        document.getElementById("canvas").innerHTML = "";
        location.reload();
    });

    // Add event listener for canvas
    document.getElementById("canvas").addEventListener("click", function(event){
        if(selected_shape == "circle"){
            let circle = new Circle(canvas, selected_class, event.clientX, event.clientY);
            circle.create();
        }
        else if(selected_shape == "square"){
            let square = new Square(canvas, selected_class, event.clientX, event.clientY);
            square.create();
        }
        else if(selected_shape == "star"){
            let star = new Star(canvas, selected_class, event.clientX, event.clientY);
            star.create();
        }
    });
});

