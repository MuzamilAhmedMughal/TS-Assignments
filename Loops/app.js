"use strict";
let myWork = [];
let lessonsName = ["Abc", "Bcd", "Cde", "Def", "Efg", "Fgh",
    "Ghi", "Hij", "Ijk", "Jkl"];
for (let i = 1; i <= 10; i++) {
    for (let index = 0; index < lessonsName.length; index++) {
        let status = true;
        (index % 2) == 0 ? status = false : status = true;
        let lesson = {
            name: lessonsName[index],
            status: status
        };
        myWork.push(lesson);
    }
}
console.log(myWork);
// 2. Guessing Game (Using while loop)
const maxVal = 25;
const randomVal = Math.floor(Math.random() * maxVal);
console.log(`Randomly generated number: ${randomVal}\n`);
let userGuess = false;
let predictedGuesses = [6, 9, 11, 45, 20, 22, 24, 12, 18, 10];
let i = 0;
while (i < predictedGuesses.length) {
    if (predictedGuesses[i] === randomVal) {
        userGuess = true;
        console.log("Your guess is right!");
    }
    else if (predictedGuesses[i] > randomVal) {
        console.log("Too low! Try again!");
    }
    else {
        console.log("Too high! Try again!");
    }
    i++;
}
// 3. Counter Incrementer (Using do while loop)
let counter = 0;
let step = 1;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
console.log(`Final Counter Val: ${counter}`);
// 4.Exploring Objects with for...in Loop
let myObject = {
    item1: "Watches",
    item2: "Sunglasses",
    item3: "Bracelets"
};
for (let i in myObject) {
    console.log(`${i}: ${myObject[i]}`);
}
// 5.Exploring Arrays with Loops(Using loop)
let myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
    console.log(`${i}: ${myArray[i]}`);
}
for (let i of myArray) {
    console.log(i);
}
