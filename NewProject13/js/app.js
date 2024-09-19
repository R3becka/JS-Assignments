
// We link (assign) the paragraph "text0" from index to texFile0
const textField0 = document.getElementById("text0");


//We call the text0 (aka textField0 and assigns it to a new textString
textField0.innerHTML = showStylizedScore(786);

function showScore(inputNumber) {
  return inputNumber * 100;
}
//in function getRandomInt() {
//   return Math.floor(Math.random() * 3);
// }this function above output is a number

function showStylizedScore(scoreInput) {
  return "Your score is: " + scoreInput * 100;
}
//in this function above a string + a number is output
