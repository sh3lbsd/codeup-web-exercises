"use strict";

console.log ("Hello from external JavaScript");

alert("Welcome to my website!");
var favColo = prompt('Please enter your favorite color.');
alert(favColor + 'is my favorite color too!');


// var rentalPerDayDollars = prompt(message:"What is the daily rental rate in dollars?");
// var littleMermaidDays = prompt("How many days will The Little Mermaid be rented?")

// Group 1 PB&J Exercises
// step 1: Get together the ingredients
// - grab jelly
// - choose your flavor of jelly (grape, strawberry, or apricot)
// - grab 2 pieces of bread
// - choose your type of bread (wheat or white)
// - grab peanut butter
// - choose your type of peanut butter (smooth or crunchy)
// - grab a butter knife
// - grab a plate
// step 2: assemble and apply the ingredients
// - put 1 slice of bread on plate
// - spread the pb with the butter knife on the bread on the plate
// - grab the second slice of bread
// - spread jelly on second slice of bread with the butter knife on the plate
// - put the two bread slices together
// step 3: prepare to eat
// - choose your type of sandwich (2 halves or without crust)
// - cut the sandwich with a butter knife
// - grab a napkin
// - enjoy (:

// Pre-lecture questions:
//     - What is a function?
// A function is a reusable block of code that performs a specified task, usually taking an input and producing an output.
//     - How are functions first-class citizens in JS?
//     - What is the difference between an argument and a parameter?
// An argument is the value that a function is called with, and a parameter is part of the function's definition.
//     - What is the difference between a function expression and function declaration?
// They're actually really similar. How you call them is exactly the same.The difference lies in how the browser loads them into the execution context. Function declarations load before any code is executed. Function expressions load only when the interpreter reaches that line of code.
//So if you try to call a function expression before it's loaded, you'll get an error! If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.
//
// Function declaration
// function foo() { return 5; }
//
// Anonymous function expression
// var foo = function() { return 5; }
//
// Named function expression
// var foo = function foo() { return 5; }
//     - What is the difference between the values stored in the variables in the following statements:
//     var x = someFunction();
// var y = someFunction;

// ================ !! Mini-exercises !!
// Write a function, returnFive, that returns the number five. No inputs should be defined.

// function returnFive() {
//     return 5;
// }

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// What input does the function take in?
// What does the function return?

// function isFive() {
//     var output = false;
//     // if the input is 5 or "5" change output to true
//     if (input === 5 || input === "5") {
//         output = true;
//     }
//     return output;
// }
//OR
//
// function isFive(input) {
//     return '5' == 5;
// }

// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// What input does the function take in? (how many inputs / what type?)

    // one input that is a string

// What does the function return? (what is the type)

    // boolean (true or false)

function isShortWord(string) {
    // if the input is less than five characters return true, otherwise return false
    // string.length < 5
    return string.length < 5;

}

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// What is the function taking in?
    // Two different string inputs
// What is the function outputting? boolean

function isSameLength(str1, str2) {
    // if the two strings are the equal length return true
    // if the two strings are not the same length return false
    return str1.length === str2.length;
}

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"
// What is the input? a string and a number
// What is the return value? a string

// function getSmallerSegment(str, num) {
//     var output = '';
//     // return num characters of str in lowercase
//     output = str.substring(0, num).toLowerCase();
//     return output;
// }
// function getSmallerSegment(str, num)......

// Refactor the following code to use functions...

// function addNums(num1, num2) {
//     return num1 + num2;
// }
// console.log('The result of num1 + num2 is: ' + addNums(2,4));
// console.log('The result of num1 + num2 is: ' + addNums (5, 1));
// console.log('The result of num1 + num2 is: ' + addNums (10, 5));
//
// logNums(2, 4);
// logNums(5, 1);
// logNums(10, 5);
//
// var x = 2;
// var y = 4;
// var totalXY = x + y;
// console.log('The result of num1 + num2 is: ' + totalXY);
//
// var a = 5;
// var b = 1;
// var totalAB = a + b;
// console.log('The result of num1 + num2 is: ' + totalAB);
//
// var c = 10;
// var d = 5;
// var totalCD = c + d;
// console.log('The result of num1 + num2 is: ' + totalCD);












































