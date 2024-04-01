// ------------ Using the old ways of JS ------------ //

// function Desk(name) {
//     var obj = {};
//     obj.name = name;
//     obj.x = 0;
//     obj.y = 0;
//     obj.color = "black";
//     obj.mov = function(x, y) {
//        this.x = x;
//        this.y = y;
//     }
//     obj.updateColor = function(new_color) {
//        this.color = new_color;
//     }
//     return obj;
//  }

// ------------- TESTING ------------- //

//  var desk1 = Desk("oak desk");
//  var desk2 = Desk("maple desk");
//  desk1.updateColor("brown");

// ------------ Using ES5 (without prototype) ------------ //

// function Desk(name){
//     this.name = name;
//     this.x = 0;
//     this.y = 0;
//     this.color = "black";

//     this.mov = function(x, y) {
//         this.x = x;
//         this.y = y;
//         return this;
//     }

//     this.updateColor = function(new_color) {
//         this.color = new_color;
//         return this;
//      }
// }

// ------------ END ----------- //

// ------------ Using ES5 with Prototype ------------ //

// function Desk(name){
//     this.name = name;
//     this.x = 0;
//     this.y = 0;
//     this.color = "black";
// }
// Desk.prototype.mov = function(x, y){
//     this.x = x;
//     this.y = y;
//     return this;
// }

// Desk.prototype.updateColor = function(new_color){
//     this.color = new_color;
//     return this;
// }

// ------------- TESTING ES5 with and without prototype ------------- //

//  let desk1 = new Desk("oak desk");
//  let desk2 = new Desk("maple desk");
//  desk1.updateColor("brown");

//  console.log(desk2);

 // ------------ Using ES6 ------------ //
class Desk {
    constructor(name){
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.color = "black";
    }

    mov(x, y){
        this.x = x;
        this.y = y;
        return this;
    }
    updateColor(new_color){
        this.color = new_color;
        return this;
    }
}
// ------------ END ------------ //

// ------------ TESTING ES6------------ //

const desk1 = new Desk("oak desk");
const desk2  = new Desk("maple desk");
desk1.updateColor("brown");

console.log(desk1);
