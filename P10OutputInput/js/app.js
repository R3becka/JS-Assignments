function multiplyBySelf (numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
console.log(multiplyBySelf(4))


function averageNumber (firstNumber, secondNumber) {
  return (firstNumber + secondNumber) / 2;
}
console.log(averageNumber(2 , 6));


function welcomingResult (firstName , lastName) {
  return "Welcome " + firstName + " " + lastName;
}
console.log(welcomingResult("Ben" , "Ting!"));


function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
console.log(getRandomInt());


function convertNumbersToLetters(number) {
  if (number === 0) {
    return "A";
  }
else if (number === 1) {
    return "B";
  }
  else if (number === 2) {
    return "C";
  }
}
console.log(convertNumbersToLetters(0));
console.log(convertNumbersToLetters(1));
console.log(convertNumbersToLetters(2));

function comparingNumbers (numberOne, numberTwo) {
  if (numberOne === numberTwo) {
    return "both numbers are equal!";
  }
  else if (numberOne > numberTwo) {
    return "first number is greater!";
  }
  else if (numberOne < numberTwo) {
    return "second number is greater!";
  }
}
console.log(comparingNumbers(3 , 3));
console.log(comparingNumbers(4 , 3));
console.log(comparingNumbers(3 , 4));


