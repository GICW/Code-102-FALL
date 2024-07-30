'use strict'

function yourName() {
    let name = prompt('What is your name?');

    return document.write(name);
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
