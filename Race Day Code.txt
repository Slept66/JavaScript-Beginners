console.log(`Codecademy's Annual Race`);
console.log(`Registeres Ticket`);
console.log(`--------------------------------------------`);
console.log(`This Imformation is for all registered early, late, and youth race. put your age where it says let = '' in the string (Replace it!), don't touch anything else that out the string, it can mess with our ticket system, if you do you will be fined!`);
console.log(`Fine: $3500`)
console.log(`--------------------------------------------`);
// Code Starts here:
let raceNumber = Math.floor(Math.random() * 1000);
// The Code above is provided by Codecademy 
let early = 'Early Race';
let late = 'Late Race';
let youth = 'Youth Race';
// This Imformation is for all registered early, late, and youth race. put your age where it says let = '' in the string (Replace it!), don't touch anything else that out the string, it can mess with our ticket system, if you do you will be fined! Fine: $3500;
//Registering: Place your age after the age = ' ';
let age = 18;
// This Imformation is for all registered early, late, and youth race. put your age where it says let = '' in the string (Replace it!), don't touch anything else that out the string, it can mess with our ticket system, if you do you will be fined! Fine: $3500;
// Comapny: You can switch anything in the string to 'late, Early, and Youth Race';
let race = 'late Race';
//Early Race Code:
if(race === 'Early Race' && age > 18){
  raceNumber += 1000;
}
if(race === 'Early Race' && age > 18){
  console.log(`You will be the part of the ` + race + `, your age is ` + age + '.');
}
if(race === 'Early Race' && age > 18){
  console.log(`Race will being at 9:30, your race number is ${raceNumber}.`);
}
//Late Race Code:
if(race === 'Late Race' && age > 18){
  raceNumber += 1000;
}
if(race === 'Late Race' && age > 18){
  console.log(`You will be the part of the ` + race + `, your age is ` + age + `.`);
}
if(race === 'Late Race'  && age > 18){
  console.log(`Race will being at 11:00, your race number is ${raceNumber}.`);
}
//Youth Race Code:
if(race === 'Youth Race' && age < 18){
  raceNumber < 1000;
}
if(race === 'Youth Race' && age < 18){
  console.log(`You will be the part of the ` + race + `, your age is ` + age + `.`);
}
if(race === 'Youth Race' && age < 18){
  console.log(`Race will being at 12:30, your race number is, ${raceNumber}.`);
}
// Age = 18 Solution:
if(age === 18){
  console.log('Information: We do not know if you are part of the Youth or the Late and early race because your age is exactly 18.');
}
if(age === 18){
  console.log('Please approach the registration desk, thanks!');
}
// Reminder Code:
console.log(`--------------------------------------------`);
console.log(`Reminder: Do not lose your ticket at all cost, you will have to buy a new one if you lose this.`);
