'use strict'

//////////////////
// define the variable named "name" and set the value to the user input of the prompt
function yourName() {
    let name;
        name = prompt('What is your name?');
        console.log(name);
    return document.write(name);
}

function guessANumber() {
    let answer;

    while (answer != 7) {
        answer = prompt('Guess a number between 1-10');
        if (answer !=7) {
            alert('Try again!');
        } else {
            alert('You are correct!');
        }
    }
}

function timeOfDay() {
    let time = prompt('What hour is it? (0-23)'); // 15;
    let message = '';

    if (time <= 11) {
        message = 'Good Morning!';
    } else if (time <= 18) {
        message = 'Good Afternoon!';
    } else if (time < 24) {
        message = "Good Evening!";
    } else {
        message = "That hour does not exist!";
    }

    return message;
}

function displayRating() {

    let output = '';
    let rating = prompt('scale of 1-5, how many stars?');
    for(let i = 0; i < rating; i++){
        output += "<img class='star' src='images/star.png'/>";
    }

    return document.write(output);
}

guessANumber();
