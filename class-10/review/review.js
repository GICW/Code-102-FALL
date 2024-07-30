// Functions are templates/blueprint to run commands or execute code

// 2 Step process -
// define or declare
// call or invoke


function greetStudents(name){
  // console.log('Hey ' + name + '!');
  return 'Hey ' + name + '!';
}

// Parameter - information a function declaration will be given
// Arguement - actual value given to the function when invoked
// When a function has a return - capture that in a variable

let ugoGreeting = greetStudents('Ugo');
// console.log(ugoGreeting);
greetStudents('Larry');

let userName = prompt('Welcome! What is your name?');
greetStudents(userName);

let rhettGreeting = greetStudents('Rhett');
console.log(rhettGreeting);


// for loop -> good for doing something a certain number of times

// 3 statements - initial val; condition to check; ++/--
for(let i = 0; i < 10; i++){
  console.log(i);
}

for(let turns = 10; turns >= 0; turns--){
  console.log('you have ' + turns + ' turns left' );
}


// while loop -> good for doing something until a condition is no longer true
let areTired = true;

while(areTired){
  console.log('go get some rest!');
  areTired = false;
}



