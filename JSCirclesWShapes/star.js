import { Shapes } from "./shapes.js";

export default class Star extends Shapes {
    create(){
        let star_element = this.create_shape();
        star_element.innerHTML = "&#9733;";
        this.container.appendChild(star_element);
        this.fade(star_element, this.font_size);
    }
}