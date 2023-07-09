// 1 - Using native javascript function
function printString(str){
    console.log(str);
}
printString("I love Javascript!!!");

// 2 - Using ES5 (without prototype)
function PrintStr(){
    this.printString = function(str){
        console.log(str);
    }
}
let printstr = new PrintStr();
printstr.printString("I love Javascript!!!");

// 3 - Using ES5 with prototype
function PrintStrProto(){

}
PrintStrProto.prototype.displayString = function(str){
    console.log(str);
}
let printstrproto = new PrintStrProto();
printstrproto.displayString("I love Javascript!!!");

// 4 - Using immediate functions
(function(str){
    console.log(str);
})("I love Javascript!!!");

// 5 - Using ES6 classes
class printStringES6 {
    printStr(str){
        console.log(str);
    }
}
const userStr = new printStringES6();
userStr.printStr("I love Javascript!!!");

// 6 - Using ES6 function with arrow symbol
const printUserStr = (str) => {
    console.log(str);
}
printUserStr("I love Javascript!!!");


// 7 - Using ES6 with immediate arrow function
((str) => {
    console.log(str);
})("I love Javascript!!!");

// 8 - Using ES5 with closures
function printStringES5(str){
    function printStr(str){
        console.log(str);
    }
    printStr(str);
}
printStringES5("I love Javascript!!!");

// 9 - Using ES6 with closures and arrow functions
const printStrArr = (str) => {
    const printUserStr = (str) => {
        console.log(str);
    }
    printUserStr(str);
};
printStrArr("I love Javascript!!!");