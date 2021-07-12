(function(){

"use strict";
// alert("hello world!");
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// arrays

// let color = ['red', 'blue', 'cyan'];
//
// function analyzeColor(){
//     let colorQuestion = prompt("What is your favorite color?")
//     if (colorQuestion === color[0]) {
//         return alert("Strawberries are " + color[0]);
//     } else if(colorQuestion === color[1]) {
//         return alert(color[1] + " is the color of the sky");
//     } else if(colorQuestion === [2]) {
//         return alert("I don't know anything about " + color[2]);
//     }
//     return alert ("no idea yet about " + colorQuestion);
// }
// analyzeColor();

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


// var luckyNum = Math.floor(Math.random() * 6);
// function calculateTotal() {
//     let total = prompt("What was the total of your purchase?")
//     alert("Your lucky number is " + luckyNum);
//     if (luckyNum === 0) {
//         return alert(total + " dollars is the total.");
//     } else if (luckyNum === 1) {
//         return alert(total - (total * .10) + " dollars is the total.")
//     } else if (luckyNum === 2) {
//         return alert(total - (total * .25) + " dollars is the total.")
//     } else if (luckyNum === 3) {
//         return alert(total - (total * .35) + " dollars is the total.")
//     } else if (luckyNum === 4) {
//         return alert(total - (total * .50) + " dollars is the total.")
//     } else if (luckyNum === 5) {
//         return alert((total - total) + " dollars is the total.")
//     }
// }
// calculateTotal();

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function isNumeric(input) {
    return !isNaN(input);
}

function createEvenOddMessage(number) {
    return (number % 2 === 0) ? 'Number is even' : 'Number is odd'
}

function createNumberPlus100Message(number) {
    return number + ' plus 100 is ' + (number + 100);
}

function createNegPosMessage(number) {
    return (number < 0) ? 'Number is negative' : 'Number is positive';
}

// function getUserNumAndInfo() {
//     var userWillEnterNumber = confirm('Click OK to enter a number');
//     var userNumber;
//     if (userWillEnterNumber) {
//         alert(userNumber);
//         if (isNumeric(userNumber)) {
//             // if the user input is a number
//             // alert even/odd message
//             alert(createEvenOddMessage(userNumber));
//             // alert number plus 100
//             alert(createNumberPlus100Message(userNumber));
//             // alert negative/positive message
//             alert(createNegPosMessage(userNumber));
//         } else {
//             // alert not a number
//             alert('Input is not a number!');
//         }
//     }
// }
// hello
// getUserNumAndInfo();

})();