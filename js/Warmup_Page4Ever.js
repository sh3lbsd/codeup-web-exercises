(function () {
const ul = document.createElement("ul");
document.body.append(ul);

const consoleLog = console.log
const log = (...args) => {
    consoleLog(...args);
    [...args].forEach((str) => {
        const li = document.createElement("li");
        li.innerHTML = str;
        ul.append(li);
    });
}
window.console.log = log


/* AUG 4 WARMUPS
​
TODO 1: Create a function, allAs, that takes in an array of letters and returns true
if all letters in the passed array are the letter 'A' or 'a' and false otherwise.
An empty array argument will return false.
​
Examples...
​
allAs(['b', 'a', 'A', 'c']) // false
allAs(['c', 'a', 'b', 'A']) // false
allAs(['a', 'A', 'a', 'a']) // true
allAs([]) // false
*/

// my solution but I don't think I'm right lmao

//function allAs(arr) {
//  if (arr.length === 0) {
//     return false;
//  }
//  for (var i = 0 ; i < arr.length; i++) {
//      if arr[i] !== 'A' && arr[i] !== 'a') {
//         return false;
//      }
//  }
//  return true;
//}

// console.log(allAs(['b', 'a', 'A', 'c'])) // false
// console.log(allAs(['c', 'a', 'b', 'A'])) // false
// console.log(allAs(['a', 'A', 'a', 'a'])) // true
// console.log(allAs([])) // false

// function allAs(inputArr) {
//     if (inputArr.length === 0) {
//         return false; 
//     }
//     // look at each element in the arr and if a non-'a' is found, return false
//     for (var i = 0; i < inputArr.length; i++) {
//         if (inputArr[i] !== 'a' && inputArr[i] !== 'A') {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(allAs([])) // false
// console.log(allAs(['b', 'a', 'A', 'c'])) // false
// console.log(allAs(['c', 'a', 'b', 'A'])) // false
// console.log(allAs(['a', 'A', 'a', 'a'])) // true

/*
TODO: 2. Create a function, all2s, that takes in an array of numbers and returns true
if all numbers in the passed array are the number 2 and false otherwise. An empty
array argument will return false.
​
Examples...
​
all2s([2, 4, 1, 9]) // false
all2s([2, 2, 2, 2, 2]) // true
all2s([2]) // true
all2s([]) // false
​
*/
// ​function all2s(arr) {
//     if (arr.length === 0) {
//         return false; 
//     }
//     for (var i = 0; i < numbers.length; i++) {
//         if (arr[i] !== 2) {
//             return false;
//         }
//     }
//     return true;
// }
// ​
// console.log(all2s([2, 4, 1, 9])) // false
// console.log(all2s([2, 2, 2, 2, 2])) // true
// console.log(all2s([2])) // true
// console.log(all2s([])) // false

/*
​TODO: 3. Create a function, objectHasAllAsAnd2s, that takes in an object with properties
for 'letters' and 'numbers' that are arrays. The function will return true if
all elements in the 'letters' array are 'A's or 'a's and all elements in the
'numbers' array are 2s. Assume that the 'letters' array will only contain valid letters
and the 'numbers' array will only contain valid numbers. If one or both arrays are empty,
the function should return false. */

// function objectHasAllAsAnd2s(objArr) {
// var objArr = 
//     if (objArr.length === 0) {
//         return false; 
//     }
// }
// ​

// function objectHasAllAsAnd2s(obj) {
//     return allAs(obj.letters) && all2s(obj.numbers);
// }



// console.log(objectHasAllAsAnd2s({
// letters: ['a', 'A', 'a', 'A'],
// numbers: [2, 2, 2, 2, 2, 2]
// })); // returns true;
// ​
// console.log(objectHasAllAsAnd2s({
// letters: ['a', 'A', 'b', 'A'],
// numbers: [2, 2, 2, 2, 2, 2]
// })); // returns false;
// ​
// console.log(objectHasAllAsAnd2s({
// letters: ['a', 'A', 'a', 'A'],
// numbers: []
// })); // returns false;
// ​
// console.log(objectHasAllAsAnd2s({
// letters: ['a'],
// numbers: [2]
// })); // returns true;



// # Third JavaScript Assessment Practice Problems
// ​
// The third JavaScript assessment will require the writing of functions that manipulate various data types, including arrays and objects. The use of iteration (loops) in many cases will be required to achieve this. The second halve of the JavaScript 101 exercises is excellent preparation for the assessment problems. This is a resource for additional practice problems.
// ​
//
// ## Problems
// ​
// 1. Create a function, `printAll`, that takes an array and logs every element on a new line in the console.
// ​
// function printAll(arr) {
//     // If array is null, looping through will throw an error
//     // returning here will exit the function
//     if(arr == null) return;
//     for (var i=0; i<arr.length; i++) {
//         // Get value at index i of array
//         var value = arr[i]
//         // log value to console
//         console.log(value)
//     }
// }
//
// // 	```javascript
// 	printAll(['hello', 'hi', 'greetings']);
// 	/*
// 	  prints...,kl
// 	  hello
// 	  hi
// 	  greetings
// 	*/
// 	```
// ​
// 1. Create a function, `getLowestNumber`, that take in an array of numbers and returns the lowest number.
// function getLowestNumber(array) {
//     return Math.min(...array);
// }
//
// // 	```javascript
// 	console.log(getLowestNumber([23,47,50,5])); // returns 5
// 	console.log(getLowestNumber([5.8,7.3,8.2,4.7, 4.3])); // returns 4.3
// 	console.log(getLowestNumber([-7,9,76,0,-4])); // returns -7
// 	```
// ​

// 1. Create a function, `getOccurrences`, that that takes in two arguments, a string and a letter. The function will count the number of occurrences of the specified letter within the string and return that number. The function should recognize case for instances (e.g. 'M' does not equal 'm').
// function getOccurrences(string, letterToCount) {
//     // A string is an array of letters
//     var counter = 0;
//     // loop through string and add 1 to the counter if the letter is equal to the one we are counting occurrences of
//     for(var index = 0; index < string.length; index++) {
//         // get letter in string at index
//         var currentLetter = string[index]
//         // if the current letter and the letter we are counting are equal, increment our counter
//         if(currentLetter === letterToCount) {
//             // the ++ operator is a shortcut for counter = counter + 1
//             counter++
//         }
//     }
//     return counter;
// }
// ​
// 	```javascript
// 	console.log(getOccurrences('hello', 'l')); // returns 2
// 	console.log(getOccurrences('mississippi', 's')); // returns 4
// 	console.log(getOccurrences('Bubble', 'B')); // returns 1
// 	```
// ​
// 1. Create a function, `getLongestString`, that takes in an array of strings and returns the longest string. If the two longest words are equal in length, return the last to appear in the array.
// ​
// 	```javascript
// 	getLongestString(['hello', 'hi', 'greetings']); // returns 'greetings'
// 	getLongestString(['hello', 'world', '!' ]); // returns 'world'
// 	```
// ​
// 1. Create a function, `getFirstLetter`, that takes an array of strings and returns an array of the first letter of each string.
// ​
// 	```javascript
// 	getFirstLetter(['hello', 'hi', 'greetings']); // returns ['h','h','g']
// 	getFirstLetter(['hello', 'world', '!' ]); // returns ['h','w','!']
// 	```
// ​
// 1. Create a function, `arrayEndsWith`, that takes two arguments, an array and a shorter array, and returns a boolean whether or not the larger array ends with the same elements as the passed second array elements. The function should return true if the second array elements are at the end of the first array. Assume that neither array will be empty, contain only string, number, or boolean elements and that the length of the second array will always be shorter than the first.
// ​
// 	```javascript
// 	arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 5]); // returns true
// 	arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 9]); // returns false
// 	arrayEndsWith(['hi', 'hmmm'], ['hmmm']); // returns true
// 	arrayEndsWith([1, 2, 3], [2, 3]); // returns true
// 	arrayEndsWith([1, 2, 3], [3, 2]); // returns false
// 	```
// ​
// 1. Create a function, `numsToObject`, that takes in three number inputs and returns them as property values `num1`, `num2`, and `num3` on an object.
// ​
// 	```javascript
// 	numsToObject(4, 5, 6); // returns {num1: 4, num2: 5, num3: 6}
// 	numsToObject(1, 2, 3); // returns {num1: 1, num2: 2, num3: 3}
// 	numsToObject(0, 199, 34); // returns {num1: 0, num2: 199, num3: 34}
// 	```
// ​
// 1. Create a function, `removeNums`, that takes in an array of data types and returns an array of the same elements except for any number data types. Numeric strings do not count as a number but NaN does.
// ​
// 	```javascript
// 	removeNums(['a', true, null, [], {}, 4, '5', NaN]) // returns ['a', true, null, [], {}, '5']
// 	removeNums(['a', 'b', 'c']) // returns ['a', true, null, [], {}, '5']
// 	```
// ​
// 1. Create a function, `objectToSum`, that takes in an object, and returns the sum of any number property values (numeric strings will not be added). Expect that no object property values will be NaN. If no number properties are present, return 0.
// ​
// 	```javascript
// 	objectToSum({prop1: 'bob', prop2: true, prop3: 5}) // returns 5
// 	objectToSum({a: '3', b: true, c: 5, d: 3}) // returns 8
// 	objectToSum({foo: 'one', bar: 'two'}) // returns 0
// 	```
// ​
// 1. Create a function, `objToObj`, that takes in an object with only property values of a string type and returns another object with a single property called 'all' with a value of all input object properties values concatenated together.
// ​
// 	***Please note that the order of object properties is uncertain and concatenating the object property values will be unpredictable. This is fine.***
// ​
// 	```javascript
// 	objToObj({foo: 'hello', bar:'world'}) // returns {all: 'helloworld'} or {all: 'worldhello'}
// 	objToObj({a: 'codeup', b:'rocks'}) // returns {all: 'rockscodeup'} or {all: 'codeuprocks'}
// 	```
// ​
// 1. Create a function, `getStringDeets`, that takes in a string and returns an object with specific properties containing information about the string, namely:
// ​
//   - `firstChar` -  containing the first character of the string
//   - `lastChar` - containing the last character of the string
//   - `length`- containing the length of characters of the string
//   - `shoutedVersion` - containing an all caps version of the string
// ​
// 	```javascript
// 	getStringDeets("apple"); // returns...
// 	/* 
// 	  {
// 	    firstChar: "a",
// 	    lastChar: "e",
// 	    length: 5,
// 	    shoutedVersion: "APPLE"
// 	  }
// 	*/
// 	```
//
// 1. Create a function, `createUsersObject`, that takes in two arrays: the first array is an array of strings (usernames), the second is an array of numbers (user ages). The function should return an object with property names matching to the first array elements paired with property values matching the second  array elements. Assume both arrays are the same length.
//
// 	```javascript
// 	var usernames = ['cindy', 'fred', 'cathy'];
// 	var ages = [34, 22, 45];
// 	createUsersObject(usernames, ages) // returns {cindy: 34, fred: 22, cathy: 45}
// 	```

//     ===============AUG 11, 2021===============
//     Create a function called processNumber
//     Takes one parameter that should be numeric - should handle both a number and a numeric string
//     Starting from the original number, double the value of every other digit
//     Then add the values of the individual digits together
//     If the doubled value now has two digits, add the digits individually
//     Return the resulting number
//     If passed the number 176248, it should return 27
//     If passed the number 1762483, it should return 30

function processNumber(numericString, number) {
    // var number = 176248;
    var numbersArray = number.toString().split("");
    // console.log(numbersArray);
    var total = 0;
    numbersArray.forEach(function(number, index) {
        if (index % 2 !== 0) {
            if ((parseFloat(number) * 2) < 10) {
                total += parseFloat(number) * 2;
            } else {
                var numberArray = number.string.toString().split("");
                // console.log(numberArray);
                var numberToAddToTotal = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
                total += numberToAddToTotal;
                }
            } else {
                total += parseFloat(number);
            }
        });
        return total;
    }
// console.log(total);



})();




































