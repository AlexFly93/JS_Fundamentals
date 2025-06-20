//Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log("Hello World" + i);
}

var cars = ["Toyota", "Honda", "Ford", "Chevrolet"];
for (let car of cars) {
    console.log(car);
    if(car === "Ford") {
        break; // exits the loop when "Ford" is found
    }
}

//ES6 for loop
cars.forEach(car => {
    console.log(car);
})