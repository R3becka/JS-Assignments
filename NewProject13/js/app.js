
// We link (assign) the paragraph "text0" from index to texFile0
// const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");



const IncreaseScoreButton = document.getElementById("button0");
//Internal Variables
let score = 0;


//Process (what is going to happen in what sequence)
IncreaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne()
  updateScoreText()
checkScoreForSeven()
});



//controllers
function increaseScoreByOne () {
  score++;
  updateScoreText();
}

function checkScoreForSeven (){
  if (score >= 7) {
    {changeScoreTextColor();}
  }

}

//View
function updateScoreText () {
  textField1.innerHTML = "Your score is: " + score;
}

function changeScoreTextColor (){
  textField1.style.color ="green";

}
