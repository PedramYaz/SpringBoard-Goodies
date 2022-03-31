// let & const exercise

// 1. ES5 Global Constants
var PI = 3.14;
PI = 42; //stop me from doing this

// write an ES2015 version of the code above:
const PI = 3.14;
PI = 3.14; //gives me an error

// 1. What is the difference between var and let?
//  there are two main differences. Let can not be redeclared, whereas var can. The other difference is that let is block scoped whereas var is function scoped

// 2. What is the difference between var and const?
//  Var can be reassigned and const cannot. Var can be redeclared and const cannot. Var is a part of a function scope and const is part of the block scope. 

// 3. What is the difference between let and const?
//  let can be reassigned and const cannot, however bot cannot be redeclared and both are a part of the block scope. 

// 4. What is hoisting? 
// hoisting is where you try to refer to an assigned variable before it is initialized. For example if you call a console.log of a variable that is than later assigned with var, you get undefined. This is because the 'var x = ...' is run first before anything else and the program realized there is a varibale by that name you are trying to console.log, but it cannot find that it is assigned to since it hasn't run yet.
