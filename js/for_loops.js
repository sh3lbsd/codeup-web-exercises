(function(){
// for loops

// var count = 100;
// while (count >= 0) {
//     console.log(count);
//     count = count -1;
// }

// "count" is the loop control variable (lcv)
// the lcv gets initialized (var count =100;)
// the value of the lcv is checked in the conditional test
// the lcv is th eoutput (console.log(count);)
// the value of the lcv is modified inside th eloop (count = count -1;) -- otherwise it is an infinite loop

    // (loop control variable is intialized; conditional tested; lcv modified)
    // i.e. where are we; we are going here; going at this speed
// for (count = 100; count >= 0; count = count -1) {
//     console.log(count);
// }
//^for loop short hand

// even shorter hand
// i is the iterator -- standard name for the loop control variable
// for (i = 100; i >=0; i-- ) {
//     console.log(i);
//     }

// while loop
//     var i = 0;
//     while (i<100) {
//         console.log(i);
//         i = i + 1;
//     }
    // the difference is that the first will only go to 99.. because the lcv is incremented after output.. i never see 99
    // var i = 0;
    // while (i<100) {
    //     i = i + 1;
    //     console.log(i);
    // }
    //Here the lcv is incremented before the output... i see 100

// for loop that does the same thing as the first while loop
    //in a for loop, the lcv is modified last.. always last.. we see 99, then it's incremented.. we never see 100.
// for (i = 0; i < 100; i++) {
//     console.log(i);
//     }

// you can change your starting point
// you can chnge your end point
// you can change how much you step up/down
// for (i=512; i >0; i -=24) {
//     console.log(i);
//     for (inner = 0; inner < 9; inner ++) {
//         console.log(i + " plus " + "equals " + (i + inner));
//     }
//     if (i < 50) {
//         console.log(i + "is such a cute little number! <3");
//     }
// }
//^loop within a loop

//    EXERCISES
//     Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
//         Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
//     For example, showMultiplicationTable(7) should output
//
//
//     7 x 1 = 7
//     7 x 2 = 14
//     7 x 3 = 21
//     7 x 4 = 28
//     7 x 5 = 35
//     7 x 6 = 42
//     7 x 7 = 49
//     7 x 8 = 56
//     7 x 9 = 63
//     7 x 10 = 70

    function showMultiplicationTable() {

    }

//     Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
//         123 is odd
//     80 is even
//     24 is even
//     199 is odd
// ...
//     Create a for loop that uses console.log to create the output shown below.
//
//
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     Create a for loop that uses console.log to create the output shown below.
//
//
//     100
//     95
//     90
//     85
//     80
//     75
//     70
//     65
//     60
//     55
//     50
//     45
//     40
//     35
//     30
//     25
//     20
//     15
//     10
//     5
//     Break and Continue
//     Create a file named break_and_continue.js in the js directory.
//         Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//         Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//         Your output should look like this:
//
//
//     Number to skip is: 27
//
//     Here is an odd number: 1
//     Here is an odd number: 3
//     Here is an odd number: 5
//     Here is an odd number: 7
//     Here is an odd number: 9
//     Here is an odd number: 11
//     Here is an odd number: 13
//     Here is an odd number: 15
//     Here is an odd number: 17
//     Here is an odd number: 19
//     Here is an odd number: 21
//     Here is an odd number: 23
//     Here is an odd number: 25
//     Yikes! Skipping number: 27
//     Here is an odd number: 29
//     Here is an odd number: 31
//     Here is an odd number: 33
//     Here is an odd number: 35
//     Here is an odd number: 37
//     Here is an odd number: 39
//     Here is an odd number: 41
//     Here is an odd number: 43
//     Here is an odd number: 45
//     Here is an odd number: 47
//     Here is an odd number: 49












})();