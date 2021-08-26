(function () {

// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99,8.98, 599];

// // prices.forEach((item)=>{
// //     // (console.log(item);
// //     output += `<p>${item}</p>`; // "<p>" + item + "</p>"
// // });
// //     $("output").html(output);

// prices.forEach((item, index) => {
//     let tax = (item + 0.0825).toFixed(2);
//     le total = (parseFloat(item) + parseFloat(tax))
// })

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let emails = users.map(user => user.email);
console.log(emails);
let trilinguals = users.filter(function (user) {
    return user.languages.length >=3
})
console.log(trilinguals);

let totalYearsExperience = users.reduce(function (total, user) {
    let yearsExperience = user.yearsOfExperience;
    return total + yearsExperience;
}, 0)
console.log(totalYearsExperience);

})();