const prompt = require("prompt-sync")()


let name = prompt("Enter the name =");
let weight = prompt("Enter the weight = ");
let height = prompt("Eter the height = ");
let age = prompt("Enter the age = ");

let totalsteps = 0;

for (let i = 1; i < 8; i++) {
    let steps = Number(prompt(`Enter the steps for a day ${i}`));
    totalsteps = totalsteps + steps;
}


function calculatebmi(weight, heightCM) {

    let heightM = heightCM / 100;
    let bmi = weight / (heightM * heightM);
    return bmi;

}

console.log(calculatebmi(weight, height).toFixed(2));


function averagesteps(steps) {
    let avg = totalsteps / steps;
    return avg

}

console.log(averagesteps(7).toFixed(0));

let bmi = calculatebmi(weight, height);


if (bmi < 18.5) {
    console.log("underweight")
}
else if (bmi < 25) {
    console.log("Healthy")
}
else if (bmi < 30) {
    console.log("overweight")
}
else {
    console.log("obese")
}


console.log("------ FITNESS REPORT ------");
console.log("Name:", name);
console.log("Age:", age);
console.log("Total Steps:", totalsteps);
console.log("averagesteps",averagesteps(7).toFixed(0));
console.log("BMI:", bmi.toFixed(2));

  