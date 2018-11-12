"use strict";
let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число");

  if (!isNaN(userInput)) {
    numbers.push(+userInput);
  } else {
    alert("Было введено не число, попробуйте еще раз!");
  }
} while (userInput !== null);
for (let i of numbers) {
  total += i;
}
if (total > 0) {
  alert(`Общая сумма чисел равна ${total}`);
}
