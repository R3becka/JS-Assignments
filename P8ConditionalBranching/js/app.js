const birthYear = 2010;
const currentYear = 2024;
const favoriteNumber = 14;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;


if (isChild) {
  console.log("You are a child.");
}
else if (isTeenager) {
  console.log("You are a teenager.");
}
else if (isAdult) {
  console.log("You are an adult.");
}
console.log()
if (favoriteNumber > favoriteNumber) {
  console.log("Favorite Number is greater");
}
else if (favoriteNumber === ageOfPerson) {
  console.log("They are the same")
}
else {console.log("age is greater")
}
if (favoriteNumber % 3 === 0) {
  console.log("Favorite Numbers is Odd")
}
else {
  console.log("Favorite Number is Even")
}
//let result = condition ? thenValue : elseValue är koden nedan
favoriteNumber % 3 === 0 ? console.log("Favorite Number is odd") : console.log("Favorite Number is even")

function makeLasagna() {
  console.log("Fry meat.")
  console.log("Cut Onions.")
  console.log("Fry Onions.")
  console.log("Add TomatoSauce.")
  console.log("Add Spices.")
  console.log("Boil.")
}
makeLasagna();
