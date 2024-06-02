// Assignment 2:Manipulating an Array: Rearranging Words
const scrambledArray = [3278, "am", "a", false, "of", "student", true, "GIAIC", "I"];
let theArray = [];
for (let i = 0; i < scrambledArray.length; i++) {
    if (scrambledArray[i] == ("I")) {
        theArray.unshift(scrambledArray[i]);
    }
    else if (scrambledArray[i] == "am") {
        theArray.splice(1, 0, scrambledArray[i]);
    }
    else if (scrambledArray[i] == "a") {
        theArray.splice(2, 0, scrambledArray[i]);
    }
    else if (scrambledArray[i] == "student") {
        theArray.splice(3, 0, scrambledArray[i]);
    }
    else if (scrambledArray[i] == "of") {
        theArray.splice(4, 0, scrambledArray[i]);
    }
    else if (scrambledArray[i] == "GIAIC") {
        theArray.push(scrambledArray[i]);
    }
}
console.log(theArray.join(" ") + ".");
export {};
