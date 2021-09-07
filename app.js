//ES5 Global Constants
// var PI = 3.14;
// PI = 42; // stop me from doing this!

//ES2015 Global Constants
const PI = 3.14;
// reassigning PI = 42 will result in an error!


/*
Quiz Questions:

Q: What is the difference between var and let?
A: Var is the older way to define variables and will add a property to the window. It can also be redeclared and has function scope
    whereas let cannot be redeclared and has block scope.


Q: What is the difference between var and const?
A: Var can be redeclared and reassigned while const cannot be redeclared nor reassigned. Like let, const has block scope while
    var has function scope.

Q: What is the difference between let and const?
A: Const cannot be reassigned, while let can be. 

Q: What is hoisting?
A: Hoisting happens when the code is compiled so that it scans the entire code file for variables and knows about them even
    though it doesn't read the variable's contents. With hoisting, using var will not result in an error if you try and use a variable
    before it's been defined (reads as undefined).
*/