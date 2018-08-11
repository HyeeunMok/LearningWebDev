var name = "John";
var age  = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = "teacher";
isMarried = false;

console.log(name + " is a " + age + " years old " + job + ". Is he married? " 
        + isMarried + ".");

age = "thirty six";
job = "driver";


console.log(name + " is a " + age + " years old " + job + ". Is he married? " 
        + isMarried + ".");

var lastName = prompt("What is the last name?");
console.log(lastName);
alert(name + " is a " + age + " years old " + job + ". Is he married? " 
        + isMarried + ".");

Lecture: operators
var now = 2016
var birthYear = now - 26;
birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJone = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
//ageJone = 26
ageJone++;
ageJone = ageJone + 1;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJone);
console.log(ageMark);

/////////////////////////////
// Lecture: if/else statements


var name = 'Jone';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    // if(false)
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if (isMarried) {
	console.log('Yes!');
} else {
	console.log('No!');
}

isMarried = true;

if (isMarried) {
	console.log('Yes!');
}
// no output
if (23 === "23") {
	console.log('Something to print...');
}

// output
if (23 == "23") {
	console.log('Something to print...');
}

////////////////////////////////////////
// Lecture: boolean logic and switch

var age = 20;
if (age < 20) {
	console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
	console.log('John is a young man.')
} else {
	console.log('John is a man.')
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
		default:
		consol.log('John deos something else.')
}

/////////////////////////////////
// coding challenge 1

var friend1Height = 175;
var friend2Height = 167;

var friend1Age = 50;
var friend2Age = 30;

var friend1Score = friend1Height + (friend1Age * 5);
var friend2Score = friend2Height + (friend2Age * 5);

if (friend1Score === friend2Score) {
	console.log('They are tie');
} else if (friend1Score > friend2Score) {
	console.log('Friend 1 wins');
} else {
	console.log('Friend2 wins')
}

var friend1Height = 174;
var friend2Height = 162;
var friend3Height = 180;

var friend1Age = 25;
var friend2Age = 28;
var friend3Age = 30;

var friend1Score = friend1Height + (friend1Age * 5);
var friend2Score = friend2Height + (friend2Age * 5);
var friend3Score = friend3Height + (friend3Age * 5);

if (friend1Score > friend2Score && friend1Score > friend3Score) {
	console.log('Friend 1 wins the game with ' + friend1Score + ' points!');
} else if (friend2Score > friend1Score && friend2Score > friend3Score) {
	console.log('Friend 2 wins the game with ' + friend2Score + ' points!');
} else if (friend3Score > friend1Score && friend3Score > friend2Score) {
	console.log('Friend 3 wins the game with ' + friend3Score + ' points!');
} else {
	console.log('It\'s a draw.');
}


///////////////////////////////////////////////
// Lecture: Functions
function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
// console.log(ageJohn);
// console.log(ageMike);
// console.log(ageMary);

function yearsUntilRetirement(name, yearOfBirth) {
	var age = calculateAge(yearOfBirth);
	var retirement = 65 - age;

	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');
	} else {
		console.log(name + ' is already retired.');
	}
}

// 1990 is year of birth
yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);


///////////////////////////////////////////////
// Lecture: Statements and expressions

function statement  -- do not produce immediately output
function someFun(par) {
	// code
}

//Expressions --- produce value
var someFun = function(par) {
	//code
}

3 + 4;
var x = 3;

//Statements
if (x === 5) {
	// do something
}


///////////////////////////////////////////////
// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

//alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
	console.log('John is Not a teacher.');
}

///////////////////////////////////////////////
// Lecture: Objects

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1968;
jane.job = 'retired';
jane['isMarried'] = true;

console.log(jane);



///////////////////////////////////////////////
// Lecture: Objects and methods


// v1.0

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};


// console.log(john.family[2]);
// console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);



// v2.0
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);

var mike = {
	yearOfBirth: 1950,
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

mike.calculateAge();
console.log(mike);



///////////////////////////////////////////////
// Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
	console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
*/
/*
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}


for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}

*/
/*
// while loops
var i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}

for (var i = 1; i < 6; i++) {
	console.log(i);
	if (i === 3) {
		break;
	}
}

for (var i = 1; i < 6; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}
*/

///////////////////////////////////////////////
// Lecture: Challenge 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18
   or older), as well as their age
.....
.....
*/


var yearsOfBorn = [1990, 1978, 1950, 2001, 2014];

function printFullAge(yearsOfBorn) {
	var ages = [];
	var fullAges = [];

	for (var i = 0; i < yearsOfBorn.length; i++) {
		ages[i] = 2018 - yearsOfBorn[i];
	}

	for (var i = 0; i < ages.length; i++) {
		if (ages[i] >= 18) {
			console.log('Person ' + (i + 1) + ' is ' + ages[i] + 
				' years old, and is of full age.');
				fullAges.push(true);
		} else {console.log('Person ' + (i + 1) + ' is ' + ages[i] + 
				' years old, and is NOT of full age.');
				fullAges.push(false);
		}
	}
	return fullAges;
}

//var yearsOfBorn = [1990, 1978, 1950, 2001, 2014];
var full_1 = printFullAge(yearsOfBorn);
var full_2 = printFullAge([2012, 1915, 1999]);



///////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1965);

function calculateAge(year) {
	console.log(2016 - year);
}

//calculateAge(1990);

// retirement(1956;)  --- does not work


var retirement = function(year) {
	console.log(65 - (2016 - year));
}
retirement(1990);

// variables

console.log(age);
var age = 23;
console.log(age);

function foo() {
	console.log(age);
	var age = 65;
	console.log(age);
}

foo();
console.log(age);


///////////////////////////////////////
// Lecture: scoping

// First scoping example

var a = 'Hello!';
first();

function first() {
	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		console.log(a + b + c);
	}
}


var a = 'Hello!';
first();

function first() {
	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		third();
	}
}
function third() {
	var d = 'John';
	//console.log(c);
	console.log(a +d);
}



////////////////////////////////////
// Lecture: The this keyword

//console.log(this);


calculateAge(1985);

function calculateAge(year) {
	console.log(2016 - year);
	console.log(this);
}



var john = {
	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);
		console.log(2016 - this.yearOfBirth);
		/*
		function innerFunction() {
			console.log(this);
		}
		innerFunction();
		*/
	}
}

john.calculateAge();

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();














