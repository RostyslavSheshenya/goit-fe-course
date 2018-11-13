"use strict";
let userInput;
const numbers = [];
let total = 0;
let i;
do {
  userInput = prompt("Введите число");

  if (!isNaN(userInput) && userInput !== null) {
    numbers.push(+userInput);
  } else if (userInput === null) {
  } else {
    alert("Было введено не число, попробуйте еще раз!");
  }
} while (userInput !== null);

for (i of numbers) {
  total += i;
}
if (numbers.length !== 0) {
  alert(`Общая сумма чисел равна ${total}`);
}
