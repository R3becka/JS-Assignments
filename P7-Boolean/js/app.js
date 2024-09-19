

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
  console.log("Player can Jet Away");
}

else {
  console.log("Player is NOT on the ground!");
    console.log("Player CAN'T jump");
}


