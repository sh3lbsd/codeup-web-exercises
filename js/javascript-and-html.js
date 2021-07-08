// "use strict";
//
// alert("Hi, I am a JavaScript Alert!");
//
// var userDecision = confirm("Are you sure you don't want to buy stuff on sale?");
// console.log(userDecision);
//
// if (userDecision === true) {
//     alert("Wise Choice!");
// } else {
//     alert("Oh no, your loss!");
// }

// prompt

var currentSpeedInMph = 65;
console.log(currentSpeedInMph);
var plannedSpeedInMph = prompt("How fast do you plan to go in mph")
console.log(plannedSpeedInMph);
var distanceLeftInMiles = prompt("How many miles away are you from your destination?");
var timeToDestinationAtCurrentSpeed =
    (distanceLeftInMiles/currentSpeedInMph) * 60;
var timeToDestinationAtPlannedSpeed = (distanceLeftInMiles/plannedSpeedInMph) * 60;
var timeGain = timeToDestinationAtCurrentSpeed -
    timeToDestinationAtPlannedSpeed;
var minutesGained = Math.floor(timeGain);
var seconds = Math.round((timeGain - minutesGained) * 60);

console.log("If you drive at " + plannedSpeedInMph + " mph, you will arrive " +  + minutesGained + " minutes and " + seconds + " seconds earlier. Is it worth it?");



console.log(timeToDestinationAtCurrentSpeed);


