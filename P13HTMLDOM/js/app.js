//Reference "txt0" and assign it to the variable

const textField0 = document.getElementById("text0");
textField0.innerHTML = "My name is Rebecka";
textField0.style.color = "Green";


const headerText2 = document.getElementById("header2");
headerText2.innerHTML = multiplyBySelf(5);

const headerText3 = document.getElementById("header3");
headerText3.innerHTML = getRandomInt().toString();


const headerText5 = document.getElementById("header5");
headerText5.innerHTML = "This is a website";
headerText5.style.color = "Green";


function multiplyBySelf (numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
