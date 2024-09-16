// Output:You are a child:False
// Output:You are a teenager: False
// Output:You are an adult: True
// Start with a variable
// const birthYear = 2000;
// Do a few age-checks:
// Save to a letvariable named isChild, when the age is from 0 till 10.
// Save to a letvariable named isTeenager, when the age is from 11 to 17
// Save to a letvariable named isAdult, when the age is 18 or more.
//   Then, print them all to the console.
//   Try with different birth years and account for edge cases (if birthYear is 2030?)

const birthYear = 2010;
const currentYear = 2024
let ageOfPerson = currentYear - birthYear;

let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17)
let isAdult = ageOfPerson >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);
console.log(ageOfPerson);

let heightFromGround = 0
let playerTouchGround = heightFromGround === 0;
let playerHasJetpack = false;

if(playerTouchGround){
  console.log("Player is on the ground.");
  console.log("Player can jump");
}
else if(playerHasJetpack) {
  console.log("Player can Jet Away")
}

else {
  console.log("Player is NOT on the ground!");
    console.log("Player CAN'T jump");
}
