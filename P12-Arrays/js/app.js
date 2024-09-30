//I'll roll 10 000 numbers between 0 and 10
//I rolled  a total of 987 times
//I rolled 1 a total of 1002 times
//I rolled 2 a total of 998 times

//Roll 0 000 times for a number between 0 and 10 by using;
//Count the number of things that you have rolldet that specific number
//afterward print the result to the console

let randomNumberCount = [0, 0, 0, 0, 0, 0 , 0 , 0 , 0 , 0];

randomNumberCount[0] += 1;

for (let i = 0; i < 100000; i++) {
  let randomNumber =getRandomInt(10);
randomNumberCount[randomNumber] += 1;
}
//To see how many times I've rolled a certain number
for (let i = 0; i <randomNumberCount.length; i++) {
  console.log("I Rolled " + i + " " + randomNumberCount[i] + " times");
}

function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}
