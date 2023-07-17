import { Shapes } from "./shapes.js";

export default class Circle extends Shapes {
    create(){
        let circle_element = this.create_shape();
        circle_element.innerHTML = "&#11044;";
        this.container.appendChild(circle_element);
        this.fade(circle_element, this.font_size);
    }
}