let title = 'Magic Eight Ball Project';
console.log(title);
console.log("-------------------------------------------");
// Project starts here!
let userName = 'Dhruv';
// You can switch anything in the string to whatever you want!
userName ? console.log(`Hello, ${userName}!` || console.log('Hello ' + userName + '!')) : console.log('Hello!');
// || means thy are the same.
let userQuestion = 'What should I eat today?';
// You can switch anything in the string to what ever you want! 
console.log(userName + ' Asked The Magic Eight Ball (Question): ' + userQuestion)

let randomNumber = Math.floor(Math.random() * 8);

console.log("-------------------------------------------");
console.log(randomNumber + ' Ignore this number!');
// Ignore as said
console.log("-------------------------------------------");

let eightBall = '';

switch(randomNumber) {
  case 0:
   eightBall = 'Pizza';
   break;
  case 1:
   eightBall = 'Burger';
   break; 
  case 2: 
   eightBall = 'Apple Sauce';
   break;
  case 3: 
   eightBall = 'Taco';
   break;
  case 4: 
   eightBall = 'Noodles';
   break;
  case 5:
   eightBall = 'Pasta';
   break;
  case 6:
   eightBall = 'Chicken Sandwitch';
   break;
  case 7:
   eightBall = 'Coockies';
   break;
  case 8:
   eightBall = 'Nothing';
   break;
}
// You can switch anything in the string to what ever you want! 
console.log(`Answer: The Magic Eight Ball says, ${eightBall}.`);
