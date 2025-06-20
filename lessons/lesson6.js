//Conditional Statement

//if(condition){
    //execute some code
//} else {
    //execute some other code
//}

var hour = 14;

if (hour >= 6 && hour <= 12) {
    console.log('Good morning!');
} else if (hour >= 12 && hour <= 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}

var ageIsMoreThan18 = true;
var isUsCitizen = true;

if (ageIsMoreThan18 && isUsCitizen) {
    console.log('The person is eligible to vote.');
}
else {
    console.log('The person is NOT eligible to vote.');
}   