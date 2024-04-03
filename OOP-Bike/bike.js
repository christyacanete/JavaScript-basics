// ------------ Using ES6 ------------ //
class Bike {
    constructor(price, max_speed){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo(){
        console.log("Price of the bike: ", this.price);
        console.log("Maximum speed: ", this.max_speed);
        console.log("Total miles driven: ", this.miles);
        return this;
    }

    drive(){
        console.log("Driving...");
        this.miles += 10;
        return this;
    }

    reverse(){
        console.log("Reversing...");
        if(this.miles > 0){
            this.miles -= 5;
        }
        return this;
    }
}
// ------------ END ------------ //

// ------------ TESTING ------------ //

const bike1 = new Bike(1000, 50);
const bike2 = new Bike(2000, 70);
const bike3 = new Bike(3000, 90);

// ------------ Using ES5 (without prototype) ------------ //

// function Bike(price, max_speed){
//     this.price = price;
//     this.max_speed = max_speed;
//     this.miles = 0;

//     this.displayInfo = function(){
//         console.log("Price of the bike: ", this.price);
//         console.log("Maximum speed: ", this.max_speed);
//         console.log("Total miles driven: ", this.miles);
//         return this;
//     }

//     this.drive = function(){
//         console.log("Driving...");
//         this.miles += 10;
//         return this;
//     }

//     this.reverse = function(){
//         console.log("Reversing...");
//         if(this.miles > 0){
//             this.miles -= 5;
//         }
//         return this;
//     }
// }

// ------------ END ----------- //

// ------------ Using ES5 with Prototype ------------ //

// function Bike(price, max_speed){
//     this.price = price;
//     this.max_speed = max_speed;
//     this.miles = 0;
// }
// Bike.prototype.displayInfo = function(){
//     console.log("Price of the bike: ", this.price);
//     console.log("Maximum speed: ", this.max_speed);
//     console.log("Total miles driven: ", this.miles);
//     return this;
// }

// Bike.prototype.drive = function(){
//     console.log("Driving...");
//     this.miles += 10;
//     return this;
// }

// Bike.prototype.reverse = function(){
//     console.log("Reversing...");
//     if(this.miles > 0){
//         this.miles -= 5;
//     }
//     return this;
// }

// ------------ TESTING ------------ //
// let bike1 = new Bike(1000, 50);
// let bike2 = new Bike(2000, 70);
// let bike3 = new Bike(3000, 90);

bike1.drive().drive().drive().reverse().displayInfo();
bike2.drive().drive().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();