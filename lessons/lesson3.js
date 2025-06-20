//Objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ['Volvo', 'Toyota', 'Tesla']
}
//dot notation
customer.firstName = 'Mike';
// bracket notation
customer['lastName'] = 'Silver';
console.log(`${customer.firstName} ${customer.lastName}`);

//arrays
var car = ["Volvo", "Toyota", "Tesla"];
car[1] = "Honda";
console.log(car[1]);
console.log(customer.cars[2]);
