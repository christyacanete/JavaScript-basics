// ------------ Using ES5 (without prototype) ------------ //
 
document.addEventListener("DOMContentLoaded", function(event){

    let color = "#CCE8CC";
    let circleId = 1;

    class Circle {
        constructor(){
            this.green_btn = document.getElementById("green-btn");
            this.blue_btn = document.getElementById("blue-btn");
            this.purple_btn = document.getElementById("purple-btn");
            this.reset_btn = document.getElementById("reset-btn");
            this.circle = document.getElementById("container");
        }

        green(){
            this.green_btn.addEventListener("click", function(){
                color = "#CCE8CC";
            });
        };

        blue(){
            this.blue_btn.addEventListener("click", function(){
                color = "#50b3f5";
            });
        };

        purple(){
            this.purple_btn.addEventListener("click", function(){
                color = "#b379da";
            });
        };

        reset(){
            this.reset_btn.addEventListener("click", function(){
                location.reload();
            });
        };

        addCircle(){
            document.getElementById("container").addEventListener("click", function(event){
                let new_circle = document.createElement("p");
                new_circle.setAttribute("id", "circle" + circleId);
                document.getElementById("container").appendChild(new_circle);

                let x = event.clientX;
                let y = event.clientY;
                let width = Math.floor(Math.random() * 200) + 1;

                document.getElementById("circle" + circleId).style.top = (-width/2) + y + "px";
                document.getElementById("circle" + circleId).style.left = (-width/2) + x + "px";
                document.getElementById("circle" + circleId).style.width = width + "px";
                document.getElementById("circle" + circleId).style.height = width + "px";
                document.getElementById("circle" + circleId).style.borderRadius = "50%";
                document.getElementById("circle" + circleId).style.backgroundColor = color;
                document.getElementById("circle" + circleId).style.display="block";

                circleId += 1;
            });
        };
    }

    const newCircle = new Circle();
    newCircle.green();
    newCircle.blue();
    newCircle.purple();
    newCircle.reset();
    newCircle.addCircle();
})