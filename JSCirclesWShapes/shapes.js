export { Shapes };

class Shapes {
    constructor(container, color, left, top){
        this.container = container;
        this.color = color;
        this.left = left - 20 - container.offsetLeft;
        this.top = top - 80 - container.offsetTop;
        this.position = "absolute";
        this.font_size = Math.floor(Math.random() * 400) + 50;
    }
    create_shape(){
        let shape = document.createElement('span');
        shape.classList.add(this.color);
        shape.style.top = this.top + "px";
        shape.style.left = this.left + "px";
        shape.style.position = this.position;
        shape.style.fontSize = this.font_size + "px";
        return shape;
    }
    fade(element, font_size){
        let self = this;
        if(font_size == 0){
            element.remove();
            return;
        }
        else{
            font_size--;
            element.style.fontSize = font_size + "px";
            if(font_size == Math.floor(this.font_size * 0.70)){
                element.style.opacity = "50%";
            }
            setTimeout(function(){
                self.fade(element, font_size);
            }, 20);
        }
    }
}




