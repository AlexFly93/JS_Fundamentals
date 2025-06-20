
var customerFirstName: string = 'John';
var customerLastName: string = 'Doe';
var customerAge: number = 30;

//customerFirstName = 100 // Error: Type 'number' is not assignable to type 'string'.
//customerLastName = 'Smith'; // Valid: Type 'string' is assignable to type

type Customer = {firstName: string, lastName: string, active: boolean};

var firstCustomer: Customer =  {
    firstName: 'Alice',
    lastName: 'Johnson',
    active: true
};