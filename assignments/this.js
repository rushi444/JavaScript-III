/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - When in the global scope, "this" will output everything in the program
* 2. Implicit - When the function is called by the preceding dot, the object before that dot is this
* 3. New - Used for constructor functions, refers to the constructor function and returned by it
* 4. Explicit - Wheneer the call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this); 

// Principle 2

const greetMe = {
    greeting: 'Hello ', 
    speak: function(name) {
        console.log(this.greeting + name); 
    }
}; 
greetMe.speak('Rushi'); 

// Principle 3

function sayHi(name) {
    this.greeting = 'Hi ';
    this.name = name; 
    this.speak = function(){
        console.log(this.greeting + this.name);
    }
};
let sayHiRushi = new sayHi('Rushi');
let sayHiDan = new sayHi('Dan'); 

sayHiRushi.speak(); 
sayHiDan.speak(); 

// Principle 4

sayHiDan.speak.apply(sayHiRushi); 