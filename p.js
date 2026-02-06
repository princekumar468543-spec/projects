const prompt = require("prompt-sync")()

let Name = prompt("Enter the Name");
let sleep =Number( prompt("Enter the Sleep hours"));
let study =Number(prompt("Enter your study time"));
let water = Number(prompt("Enter the water of glasses on our day"));
let steps = Number(prompt("Enter the steps per day"));

function calculatehealth(steps,sleep,water){
    let score = (sleep*10) + (steps/100) + (water*10)

    return score;
}

function productivity (water, study){
    let level = water + study;
    return level;

}
let level = productivity(water, study);
let healthScore = calculatehealth(steps, sleep, water);

console.log("Level:", level);
console.log("Health Score:", healthScore);





