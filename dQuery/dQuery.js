function $query(selector){
    const self = {
        element: document.querySelectorAll(selector),
        html: ()=> self.element,
        click: (callback)=>{
            for(let i=0; i<self.element.length; i++){
                self.element[i].addEventListener("click", callback);
            }
        }, 
        hide: ()=>{
            for(let i=0; i<self.element.length; i++){
                self.element[i].style.display = "none";
            }
        },
        show: ()=>{
            for(let i=0; i<self.element.length; i++){
                self.element[i].style.display = "block";
            }
        }
    }
    return self;
}