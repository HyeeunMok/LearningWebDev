/*************************
 * Lecture: Hoisting
 */

calculateAge(1965);

// functions
 function calculateAge(year) {
     console.log(2016 - year);
 }

//  retirement(1956);  -> Not working here

 var retirement = function(year) {
     console.log(65 - (2016 - year));
 }
 
 retirement(1956);


 // variables
//  console.log(age);  --> undefined
 var age =23;
 console.log(age);

 function foo() {
    //  console.log(age);  --> undefined
     var age = 65;
     console.log(age);
 }
 foo();
 console.log(age);

 /******************
  * Lecture: Scoping
  */

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

  /********************************
   * Lecture: The this keyword
   */

/*
   calculateAge(1985);

   function calculateAge(year) {
       console.log(2016 - year);
       console.log(this);
   }
*/

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
   }

   mike.calculateAge = john.calculateAge;
   mike.calculateAge();