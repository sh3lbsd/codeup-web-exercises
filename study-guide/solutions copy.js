"use strict";
// Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
//
// isTrue(true)             // true
// isTrue(false)            // false
// isTrue(0)                // false
// isTrue(null)             // false
// isTrue("true")           // false
// isTrue("Banana")         // false
// isTrue([1, 2])           // false
function isTrue(input) {
    /// === means exactly the same in both value and data type
    // "5" === 5 // false because string and number
    return input === true;
}
// Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
//
// isFalse(false)             // true
// isFalse(true)              // false
// isFalse(0)                 // false
// isFalse(null)              // false
// isFalse("")                // false
// isFalse("Banana")          // false
// isFalse([1, 2])            // false
function isFalse(input) {
    return input === false;
}
// Define a function named not that takes in any input and returns the boolean opposite of the provided input.
//
// not(false)                  // true
// not(0)                      // true
// not("")                     // true
// not(null)                   // true
// not(NaN)                    // true
// not(undefined)              // true
// not(true)                   // false
// not("something")            // false
// not(Infinity)               // false
// not(123)                    // false
function not(input) {
    // exclamation point is the "not" operator
    return !(input);
}
// Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
//
// addOne(0)                    // 1
// addOne(2)                    // 3
// addOne(-5)                   // -4
// addOne(5.789)                // 6.789
// addOne(Infinity)             // Infinity
// addOne("2")                  // 3
// addOne("0")                  // 1
// addOne("banana")             // NaN
// addOne(true)                 // NaN
// addOne(NaN)                  // NaN
function addOne(input) {
    // "parseFloat" will get the numerical value of the input whether or not it is a string or a number
    return parseFloat(input) + 1;
}
// Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.
//
// isEven(2)                   // true
// isEven(-8)                  // true
// isEven(0)                   // true
// isEven("42")                // true
// isEven(1)                   // false
// isEven("-3")                // false
// isEven(false)               // false
// isEven("banana")            // false
function isEven(input) {
    // Use "parseFloat" to get the number value 
    // If the remainder when the input is divided by 2 equals 0, then the number is even.
    return parseFloat(input) % 2 === 0;
}
// Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.
//
// isIdentical(3, 3)                     // true
// isIdentical(false, false)             // true
// isIdentical("hello", "hello")         // true
// isIdentical(3, 3.0)                   // true
// isIdentical(undefined, undefined)     // true
// isIdentical(2, "2")                   // false
// isIdentical("javascript", "java")     // false
function isIdentical(input1, input2) {
    return input1 === input2;
}
// Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
//
// isEqual(3, "3")                       // true
// isEqual("abc123", "abc123")           // true
// isEqual(true, 1)                      // true
// isEqual(0, false)                     // true
// isEqual(4, -5)                        // false
// isEqual("java", "javascript")         // false

function isEqual(input1, input2) {
    return input1 == input2; // == means only in value
}

// Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
//
// or(true, true)                    // true
// or(true, false)                   // true
// or(false, true)                   // true
// or(false, false)                  // false
// or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)

function or(input1, input2) {
    return input1 || input2;
}

// Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
//
// and(true, true)                    // true
// and(true, false)                   // false
// and(false, true)                   // false
// and(false, false)                  // false
// and("hello", "world")              // "world" (this behavior is non-obvious, research more)

function and(input1, input2) {
    return input1 && input2;
}

// Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
//
// concat("code", "up")                // "codeup"
// concat("connect", 4)                // "connect4"
// concat("hello", "world")            // "helloworld"
// concat(4, 2)                        // "42"
// concat(true, true)                  // "truetrue"
// Hints
// Consider this example problem.

function concat(input1, input2) {
    // Concatenating "string1" and "string2" would be "string1string2" 
    // Concatenating 1 and 1 would be "11" 
    // Adding two strings together with + will concatenate them
    // Add an empty string to a number to turn a number into a string
    return ("" + input1) + ("" + input2);
}

//     Write a function called isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// isBoolean("Dog") should return false because a string is not a boolean
// isBoolean(false) should return true because only true and false are boolean values.
//     When a problem says return, it means return, not console.log.
//     When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.
// The following example is incorrect because the function does not take in an argument. It's referencing a global variable, and that is not the same as accepting an input as an argument.
//
// var input = "Grace Hopper"
// function isBoolean() {
//     return typeof input == "boolean";
// }
// This is incorrect because the function doesn't return the output. Functions that do not have an explicit return statement return undefined by default.
//
// function isBoolean(input) {
//     console.log(typeof input == 'boolean');
// }
// Correct solution:
//
//     function isBoolean(input) {
//         return typeof input == "boolean";
//     }
/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
