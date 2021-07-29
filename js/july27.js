// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//     Assume the following shape of the user object for the function input:

//     {
//         firstName: '...',
//         lastName: '...',
//         email: '...',
//         username: '...',
//         password: '...'
//     }

    // The shape of the output should be the following:
    // {
    //     firstName: '...',
    //         lastName: '...',
    // }
    // Regardless of the case of the first name and last name input, the output should be in all lower case.

    // getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}

var shelby;
shelby = {
    firstName: 'Shelby',
    lastName: 'Davis',
    email: 'shelby@email.com',
    username: 'shelby123',
    password: 'pass123'
};

function getSimpleUser(input) {
    return {firstName: input.firstName.toLowerCase(), lastName: input.lastName.toLowerCase()};
}

console.log(getSimpleUser(shelby))