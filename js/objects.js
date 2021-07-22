// (function() {
"use strict";
// var currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75
// }

// console.log(currentWeather.temp);
// console.log(currentWeather.humidity);
// console.log(currentWeather.feels_like);
// // dot notation^
// console.log(currentWeather["temp"]);
// var whatImInterestedIn = "humidity";
// console.log(currentWeather[whatImInterestedIn]);
// // array/bracket syntax ^

// console.log("The current temp is " + currentWeather.temp);
//
// function fahrenheitToCelsius(tempInF) {
//     return (5 *(tempInF - 32))/9;
// }
// console.log("The current temp is " + currentWeather.temp + "F, "
//     + fahrenheitToCelsius(currentWeather.temp).toFixed
//     (2) + "C");

// notes from class

function log(...args) {
    [...args].forEach(str => {
        const div = document.createElement('div');
        div.innerHTML = str
        document.body.append(div)
    })
}
// console.log = log
//logs things on the page instead of the console^^


//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//
// var person = {
//     firstName: "Shelby",
//     lastName: "Davis",
// };
//
// log(person.firstName);
// log(person.lastName);


    // console.log(person.firstName)
    // console.log(person.lastName)





//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */

// person.sayHello = function() {
//     return "Hello from " + person.firstName + " " + person.lastName;
// };
//
// log(person.sayHello());
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */

    var discountThreshold = 200;
    var discountPercentage = .12;
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];
    // if purchasing more than $200, will get 12 %

    // cameron is purchasing $180 of stuff. he will get $??(0) off the purchase and
        // pay $180
    // ryan is purchasing $250 of stuff. he will get $30 of the purchase and pay $220
        // .12 * 250 = 30
    // george is purchasing $320 of stuff. he will get $38.40 of the purchase and pay
        // $281.60

function calculateDiscount(amount, threshold, discountPercentage) {
    //if the amount is greater than the threshold, apply the discount percentage
    if (amount <= threshold) {
        return 0;
    } else {
        return (amount * discountPercentage);
    }
}

// log(calculateDiscount(180, discountThreshold, discountPercentage), 0); // 0
// log(calculateDiscount(250, discountThreshold, discountPercentage), 30); // 30
// log(calculateDiscount(320, discountThreshold, discountPercentage), 38.4); // 38.4
    function numToCurrency(num) {
        return '$' +num.toFixed(2);
    }
    shoppers.forEach(function(shopper) {
    //What's the name of the array... "shoppers"
        for (var i = 0; i <= shoppers.length; i +=1) {
            var discountedAmount = calculateDiscount(shoppers[i].amount, discountThreshold,
                discountPercentage);
            var output = shoppers[i].name + ' is purchasing ' + shoppers[i].amount
                + ' of stuff. He will get '
                + discountedAmount + ' off the purchase and pay '
                + (shoppers[i].amount - discountedAmount) + '.';
            log(output);
        }
    });
// var ryansDiscountedAmount = calculateDiscount(shoppers[1].amount, discountThreshold,
//     discountPercentage);
// var output2 = shoppers[1].name + ' is purchasing ' + shoppers[1].amount
//     + ' of stuff. He will get '
//     + cameronsDiscountedAmount + ' off the purchase and pay '
//     + (shoppers[1].amount - cameronsDiscountedAmount) + '.';
//
// var georgesDiscountedAmount = calculateDiscount(shoppers[2].amount, discountThreshold,
//     discountPercentage);
// var output3 = shoppers[2].name + ' is purchasing ' + shoppers[2].amount
//     + ' of stuff. He will get '
//     + cameronsDiscountedAmount + ' off the purchase and pay '
//     + (shoppers[2].amount - cameronsDiscountedAmount) + '.';

// log(output1);
// log(output2);
// log(output3);
//
//
// log(output1);

//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//




//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//




//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
// })();