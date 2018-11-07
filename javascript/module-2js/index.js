"use strict";
let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число");
  if (userInput >= 0) {
    numbers.push(Number(userInput));
    console.log(userInput);
  } else {
    alert("Было введено не число, попробуйте еще раз!");
  }
  console.log(numbers);
} while (userInput !== null);
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
  console.log(total);
}

alert(`Общая сумма чисел равна ${total}`);
