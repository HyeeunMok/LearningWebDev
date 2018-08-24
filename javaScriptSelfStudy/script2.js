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



 /********************************************
 * Function
 */

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');


 /********************************************
 * Function Statements and Expressions
 */

 // Function declaration
 // function whatDoYouDo(job, firstName) {}

 // Function expression
 var whatDoYouDo = function(job, firstName) {
     switch(job) {
         case 'teacher':
            return firstName + ' teaches kids how to code';
         case 'driver':
            return firstName + ' drives a cab in Lisbon.';
         case 'designer':
            return firstName + ' designs beautiful websites.';
         default:
         return firstName + ' does something else.';
     }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('retired', 'Mark'));


  /********************************************
 * Arrays
 */

 // Initialize new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 // Mutate array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names); 


 // Different data types

 var john = ['John', 'Smith', 1990, 'teacher', false];

 john.push('blue');
 john.unshift('Mr.');
 console.log(john);

 john.pop()
 john.pop()
 john.shift()
 console.log(john);
 
 console.log(john.indexOf(1990));
 console.log(john.indexOf(23));


 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
 console.log(isDesigner);


 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1992,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false,
     calcAge: function() {
         this.age = 2018 - this.birthYear;
     }
 };

john.calcAge();
console.log(john);

  /********************************************
 * Loops and iteration
 */
 
 /*
// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

*/

// Continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
