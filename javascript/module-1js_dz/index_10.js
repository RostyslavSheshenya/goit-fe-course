"use strict";
let promtOut;
const userInput = prompt("Введите число от 1 до 5");
console.log(Number(userInput));
if (userInput >= 1 && userInput <= 5) {
  switch (Number(userInput)) {
    case 1:
      alert("Каталог хостелов");
      break;
    case 2:
      alert("Каталог бюджетных отелей");
      break;
    case 3:
      alert("Каталог отелей ***");
      break;
    case 4:
      alert("Каталог отелей ****");
      break;
    default:
      alert("Каталог лучших отелей");
  }
} else if (userInput === null) {
  alert("Oчень жаль, приходите еще!");
} else if (userInput === NaN) {
  alert("Неверный ввод, возможные варианты 1-5!");
} else {
  alert("Неверный ввод, возможные варианты 1-5!");
}
