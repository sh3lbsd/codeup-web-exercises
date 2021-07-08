// alert("hello world!");

// var flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");
// if (flavor === "chocolate"){
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla"){
//     alert("One vanilla coming right up!");
// } else if (flavor === "strawberry") {
//     alert("One vanilla coming right up!");
// } else {
//     alert("We do not have that flavor. Sorry! :(");
// }

// switch
// hey browser, look at the value of the flavor variable
// and switch your response depending on the value
//
// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. sorry! :(");
// }

// function getIceCreamOrder(flavor) {
//     if (flavor === "chocolate") {
//         alert("One chocolate coming right up!");
//     } else if (flavor === "vanilla") {
//         alert("One vanilla coming right up!");
//     } else if (flavor === "strawberry") {
//         alert("One vanilla coming right up!");
//     } else {
//         alert("We do not have that flavor. Sorry! :(");
//     }
// }
// function getIceCreamOrder(flavor){
//     if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry"){
//         alert("One " + flavor + " coming right up!");
//     } else {
//         alert("We do not have that flavor. Sorry! :(");
//     }
// }

// function checkIfWeHaveTheFlavor(flavor){
//     var weHaveThat = false;
//     if (flavor === "chocolate") {
//         weHaveThat = true;
//     } else if (flavor === "vanilla") {
//         weHaveThat = true;
//     } else if (flavor === "strawberry") {
//         weHaveThat = true;
//     }
//     return weHaveThat;
// }

// function getIceCreamOrder() {
//     return prompt("Welcome to Codeup Ice Cream!");
// }
// function replyToCustomer(flavor){
//     if (checkIfWeHaveTheFlavor(flavor)){
//         alert ("One " + flavor + " coming right up!");
//     } else {
//         alert("We do not have that flavor. Sorry! :(");
//     }
// }
//
// replyToCustomer(getIceCreamOrder());

// var decision = confirm("Are you sure you want to close this page?");
// alert(decision);

// if (decision){
//     alert("OK, closing the page ... :-(");
// } else {
//     alert("Yay! Keeping page open ... :-)");
// }

// alert( (decision === true)? "OK, closing the page ... :-(" : "Yay! Keeping page open ... :-)" );

// var num = 10;
//
// if(num % 5 === 0) {
//     alert("That number is divisible by 5!");
// } else {
//     alert("That number is not divisible by 5!");
// }

// function divisibleByFive(num) {
//     if (num % 5 === 0) {
//         alert("That number is divisible by 5!");
//     } else {
//         alert("That number is not divisible by 5!");
//     }
// }

// function divisibleByFive(num){
//     alert ( (num % 5 === 0)? "That number is divisible by 5" : "That number is not divisble by 5");
// }

// function isDivisibleByFive(num){
//     if (num % 5 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// boolean^^

// function isDivisibleByFive(num){
//     return num % 5 === 0;
// }
//
// function isDivisibleByTen(num){
//     return num + 10 === 20;
// }

// var email;

// if (typeof email === "undefined") {
//     alert("That's undefined!");
// } else {
//     alert("That's not undefined. :)");
// }

//typeof returns a string

// function isUndefined(input) {
//     if (typeof input === "undefined") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isUndefined(input) {
//     return typeof input === "undefined";
// }

// function alertMVPCustomer(totalPurchase) {
//     if (totalPurchase > 1000) {
//     alert("We have an MVP customer!");
//     }
// }

// boolean
// function alertMVPCustomer(totalPurchase) {
//     if (totalPurchase > 1000) {
//         return true;
//     } else {
//         return false;
//     }
// }

// these two are the same code but the bottom one is simplified

// function alertMVPCustomer(totalPurchase) {
//     return totalPurchase > 1000;
// }

// function isMVPCustomer(totalPurchase){
//     return totalPurchase > 1000;
// }
//
// var whatTheCustomerSpent = 1001;
//
// function isMVPCustomer(totalPurchase) {
//     return totalPurchase > 1000;
// }
//
// if (isMVPCustomer(whatTheCustomerSpent)) {
//     alert("We have an MPV customer!");
// }


//diff b/w function explanations and declarations
//order matters ask more about it

// don't call a glbal variable from inside a function