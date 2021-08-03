/*
Create a function, analyzeArray, that takes in a an array and 
returns an object with information about the passed array.
The function should return an object with properties containing 
information about the array, including the lengthOfArray,
containsAllStrings, and the combineResult of adding all 
elements together. */

// function analyzeArray(arr) {
//     // loop over the array
//     var combine = arr[0];
//     var isAllStrings = true;
//     for (var i =0; i < arr.length; i++) {
//         //for each element, combine into a value to update 
//         //the object combineResult prop 
//         if (i === 0) {
//         } else {
//             combine += arr[i];
//         }
//         //check if the element is a string or not
//         if (typeof arr[i] !== 'string') {
//             isAllStrings = false;
//         }
//     }

//     console.log(combine);
//     console.log(isAllStrings);

//     // return the object containing the info for the array

//     return {
//         lengthOfArray: arr.length,
//         containAllStrings: isAllStrings,
//         combineResult: combine,
//     };
// }

// console.log(analyzeArray([1, 2, 3 ])); // 6
// console.log(analyzeArray(['a', 'b', 'c' ])); 
// console.log(analyzeArray(['bob', 100, null ])); 

//cleaned up version
function analyzeArray(arr) {
    var combine = arr[0]; // assign starting value
    var isAllStrings = true;
    for (var i = 0; i < arr.length; i++) {
        if (i !== 0) combine += arr[i]; // skip combining the first array element
        if (typeof arr[i] !== 'string') isAllStrings = false; // switch to false if sad path
    }
    return {
        lengthOfArray: arr.length,
        containsAllStrings: isAllStrings,
        combineResult: combine
    };
}

/*
    EXAMPLE 1

    analyzeArray([1, 2, 3]) returns...

    {
    lengthOfArray: 3,
    containsAllStrings: false,
    combineResult: 6
    }


    EXAMPLE 2

    analyzeArray(['a', 'b', 'c']) returns...

    {
    lengthOfArray: 3,
    containsAllStrings: true,
    combineResult: 'abc'
    }


    EXAMPLE 3

    analyzeArray(['bob', 100, null]) returns...

    {
    lengthOfArray: 3,
    containsAllStrings: true,
    combineResult: 'bob123null'
    }
*/

//sebastian's example
// function analyzeArray(arr) {

//     return {
//       lengthOfArray: arr.length,
//       containsAllStrings: arr.every(i => (typeof i === "string")),
//       combineResult: String(arr)
//     }
//   }

//   console.log(analyzeArray([1, 2, 3]));
//   console.log(analyzeArray(['a', 'b', 'c']));
//   console.log( analyzeArray(['bob', 100, null]));

// justin's revision
// function analyzeArray(arr) {
//     return {
//         lengthOfArray: arr.length,
//         containsAllStrings: arr.every(i => (typeof i === "string")),
//         combineResult: arr.reduce((accum, curr) => accum + curr)
//     }
// }