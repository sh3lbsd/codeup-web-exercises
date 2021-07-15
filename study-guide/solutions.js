// Problems
// Define a function, sayHello, that returns the string hello.
// sayHello() // 'hello'

function sayHello() {

    return "hello";
}
/**
 * Getting second to last character
 * 
    var input = 'hello'
    input[0] // first character
    var numberOfCharacters = input.length
    var indexOfLastCharacter = input.length - 1
    var indexOfSecondToLastCharacter = input.length - 2
    input[indexOfLastCharacter] // last character
    input[indexOfSecondToLastCharacter] // second to last character
 */
// Define a function, returnSecondToLastChar that returns the second to last character of a given string input. A string of improper input should be returned if the function is invoked with no input or if the input is not a string. The function should return an empty string if passed an empty string as input or a one character string.
function returnSecondToLastChar(input) {
    // If the input is of the type: "string"
    if (typeof input === 'string') {
        if (input === '') {
            // If the input is an empty string
            return '';
        } else if (input.length === 1) {
            // If the input has only one character
            return '';
        } else {
            // Otherwise return the second to last character
            return input[str.length - 2];
        }
    } else {
        // If the input is not a string, return 'improper input' 
        return 'improper input';
    }

}