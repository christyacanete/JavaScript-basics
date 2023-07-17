import { Shapes } from "./shapes.js";

export default class Square extends Shapes {
    create(){
        let square_element = this.create_shape();
        square_element.innerHTML = "&#x25A0;";
        this.container.appendChild(square_element);
        this.fade(square_element, this.font_size);
    }
}