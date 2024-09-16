let speedInput = 72;
let SpeedOutput = 0;

SpeedOutput = speedInput / 3.6;
console.log(SpeedOutput);

let minuteInput = 3;
let secondOutput;

secondOutput = minuteInput *60;
console.log(secondOutput);

let numberInput = 11;
let numberInputTwo = 4;

answer = numberInput/numberInputTwo

console.log(answer);

answer = numberInput % numberInputTwo;
console.log(answer);

let radiusInput = 2;
 let pi = 3.14;

 area = radiusInput * radiusInput * pi;
console.log(area);

let negationinput = 11;
let negationOutput = -1;
answer= negationinput * (negationOutput);
console.log(answer);

let weightInput = 70
let HeightInput = 1.82

BMI = weightInput / (HeightInput * HeightInput);
console.log(BMI);

let secondsInput = 111;
let minSecOutput;

let minOutput;
minOutput = Math.floor( secondsInput / 60);
console.log(minOutput);

let secOutput;
secOutput = secondsInput - minOutput * 60;
console.log(secOutput);

minSecOutput = minOutput + " minute(s) and " + secOutput + " second(s)";
console.log(minSecOutput);





//Hypotenusan

let sideA = 3;
let sideB = 4;
let hypotenuse;
let squareOfAB = Math.pow(sideA, 2) + Math.pow(sideB, 2);

hypotenuse = Math.sqrt(squareOfAB);
console.log(hypotenuse);
