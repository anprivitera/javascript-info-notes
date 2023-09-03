"use strict";
var newNumbers;
const numbers = [1, 3, 5];
function multiplier(numbers) {
    return numbers * 2;
}
newNumbers = numbers.map(multiplier)
document.write(`The old numbers were ${numbers}. The new numbers are ${newNumbers}`)