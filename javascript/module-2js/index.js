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
    break;
  } else {
    alert("Было введено не число, попробуйте еще раз!");
  }
} while (userInput !== null);

if (numbers.length !== 0) {
  for (i of numbers) {
    total += i;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
