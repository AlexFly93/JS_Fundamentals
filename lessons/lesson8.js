// Declarative function
function helloOne() {
  console.log("Hello, One!");
}
helloOne();

//Anonymous function
var helloTwo = function() {
  console.log("Hello, Two!");
}
helloTwo();

//ES6 Arrow function
var helloThree = () => {
  console.log("Hello, Three!");
}
helloThree();

//function with arguments
function printName(name, lastName){
    console.log(name + " " + lastName);
}
printName("Alice", "Smith");

//function with return
function multiplyByTwo(num) {
    var result = num * 2;
    return result;
}
var myResult = multiplyByTwo(5);
console.log(myResult);

//import function
import { printAge } from '../helpers/printHelper.js';
printAge(30);

//import everything
import * as helper from '../helpers/printHelper.js';
helper.printAge(25);