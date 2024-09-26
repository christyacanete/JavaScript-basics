export function Circle (){

    // Initialize variables
    let color = "#CCE8CC";
    let circleId = 1;

    this.addCircle = function (x, y, color, width, name){
        let new_circle = document.createElement("p");
        new_circle.setAttribute("id", "circle" + circleId);

        let user = document.createElement("p");
        user.setAttribute("id", "users");
        let text = document.createTextNode(name);

        document.getElementById("container").appendChild(new_circle);
        user.appendChild(text);

        document.getElementById("circle" + circleId).style.top = (-width/2) + y + "px";
        document.getElementById("circle" + circleId).style.left = (-width/2) + x + "px";
        document.getElementById("circle" + circleId).style.width = width + "px";
        document.getElementById("circle" + circleId).style.height = width + "px";
        document.getElementById("circle" + circleId).style.borderRadius = "50%";
        document.getElementById("circle" + circleId).style.backgroundColor = color;
        document.getElementById("circle" + circleId).style.display="block";

        user.style.top = "35%";
        user.style.left = "35%";
        document.getElementById("circle" + circleId).appendChild(user);

        circleId += 1;
        
        return this;
    };
}
