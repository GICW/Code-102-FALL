'use strict';


// ************* NOTES ON LOOPS AND LOGIC **********

/*
while(this is true){execute this code}

let z = 5;
while(z < 10){
  console.log('infinite loop?');
  z++;
}
++ --> ADDS 1 TO THE NUMBER, SHORT HAND FOR z = z + 1 OR z += 1

5 < 10 True -> run the console.log..then add one to z
6 < 10 True -> run the console.log..then add one to z
7 < 10 True -> run the console.log..then add one to z
8 < 10 True -> run the console.log..then add one to z
9 < 10 True -> run the console.log..then add one to z
10 < 10 False -> Break the loop

FOR LOOP ANATOMY:
for(initial value; conditional to evaluate; increment/decrement){
  execute this code;
}

let response = prompt('What is my favorite tv show?');
for(let i = 0; i < 4; i++){
  response = prompt('guess again');
}

*/

function getName(){
  let userName = prompt('What is your name?');
  return userName;
}

function greetUser(name){
   document.write('Welcome ' + name + '!');
}

function getAge(){
  let userAge = prompt('How old are you?');
  return userAge;
}

// CHANGING THE IF TO A WHILE LOOP THAT WILL CONTINUE TO PROMPT THE USER FOR AN AGE IF THEY DON'T ENTER ANYTHING

function specialMessage(age){
  while(age == ''){
    age = prompt('Don\'t be ashamed, tell me your age!');
  }

  if(age < 30){
    document.write('You got rizz!');
  } else if (age == 50) {
    document.write('You have charisma!');
  } else {
    document.write('Keep doing you!');
  }
}

// FOR LOOP IN ACTION - SEE HOW I'M INVOKING THIS ON LINE #63 OF THE INDEX.HTML PAGE
function howManyCats(){
  let numOfCats = prompt('How many cats would you like to see?');

  for(let i = 0; i < numOfCats; i++){
    document.write("<img class='loop-img' src='omg.jpeg' alt='this cat is over it' >")
  }
}

