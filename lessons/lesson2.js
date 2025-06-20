//Concaination and Interpolation
var price = 50;
var itemName = "Cup";
var messageToPrint = "The price of your "+itemName+" is "+price+" dollars"; // Concatenation
var messageToPrint2 = `The price of your ${itemName} is ${price} dollars`; // Interpolation
console.log(messageToPrint);
console.log(messageToPrint2);
