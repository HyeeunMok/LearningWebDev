/************ From Lecture 14****************
 * If / else statements
*/

/*
var firstName ='John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\' BMI is higher than John\'s.');
} else {
    console.log('John\' BMI is higher than Mark\'s.');
}
*/

/********************************************
 * Boolean logic
 */



 /********************************************
 * The ternary Operator and Switch Statements
 */

var firstName= 'John';
var age = 22;


// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + 
    ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

// Switch statement

var job = 'cop';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
        break;
}

age = 45;
switch (true) {
    case age < 13:
    console.log(firstName + 'is a boy.');
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a youngman.');
    break;
    default:
    console.log(firstName + ' is a man.');
}


 /********************************************
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;

height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coerction!');
}

