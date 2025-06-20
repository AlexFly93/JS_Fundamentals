//Logical "AND"
console.log(true && true); //all values have to be true for expression to be true
console.log(true && false); //one value is false, so expression is false
console.log(false && false); //all values are false, so expression is false

//Logical "OR"
console.log(true || false); //one value is true, so expression is true
console.log(false || false); //all values are false, so expression is false
console.log(false || true); //one value is true, so expression is true

var ageIsMoreThan18 = true
var isUsCitizen = true

var eligibleToVote = ageIsMoreThan18 && isUsCitizen;
console.log('The person is eligible to vote: ' + eligibleToVote);

//Logical "NOT"
console.log(!true); // negates the value, so it becomes false
console.log(!false); // negates the value, so it becomes true
console.log(6 !== 10); // checks if 6 is not equal to 10, which is true

