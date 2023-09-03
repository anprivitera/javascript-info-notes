"use strict";
let newNumbers;
let message1 = "old numbers", message2 = "new numbers" // this is not recommended
const numbers = [1, 3, 5];
function multiplier(numbers) {
    return numbers * 2;
}
newNumbers = numbers.map(multiplier)
document.write(`The ${message1} were ${numbers}. The ${message2} are ${newNumbers}`)