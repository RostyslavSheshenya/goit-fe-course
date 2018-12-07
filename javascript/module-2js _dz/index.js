"use strict";
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while /*
const text = "Bвести число больше 100";
let addUser;
do {
  addUser = prompt(text);
  if (addUser === null) {
    break;
  }
  if (addUser < 100) {
    alert("ввести ещё раз");
  } else {
    break;
  }
} while (addUser !== null);*/
//====================================

/*const password = ["qwerty", "west", "exit", "1234"];
let attempst = 3;
let userInputPassword;
let total;
let i;

while (userInputPassword !== null && attempst !== 0) {
  userInputPassword = prompt("Введите пароль");
  attempst -= 1;
  for (i of password) {
    //console.log(i);
    console.log(password[i]);
    if (i === userInputPassword) {
      alert("Добро пожаловать!");
      break;
    }
  }
  if (attempst === 0) {
    alert("У вас кончились попытки, аккаунт заблокирован");
  } else if (i !== userInputPassword) {
    alert(`Неверный пароль у вас осталось ${attempst} попыток`);
  }
}*/

/*
Напишите скрипт, который выводит через console.log все 
числа от min до max, с двумя исключениями: 
  
  - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
  
  - Для исел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
  
PS: используйте цикл for

*/
/*
const min = 1;
const max = 100;
const massive = [];
let f = "Fizz";
let b = "Bizz";

for (let i = 0; i <= max; i += 1) {
  massive.push(i);
  if (i % 3 === 0 && i !== 0) {
    massive.splice(i, 1, f);
  }
  if (i % 5 === 0 && i !== 0) {
    massive.splice(i, 1, b);
  }
  if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
    massive.splice(i, 1, f + b);
  }
}
console.log(massive);*/
//=============================
/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/
/*
const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];
for (let i of numbers) {
  if (i > num) {
    newArray.push(i);
  }
}
console.log(newArray);
*/
//===================================

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/
/*
const string = "May the force be with you";
let str = [];
let total = 0;
let longestWord;

str = string.split(" ");

for (let i = 0; i < str.length; i += 1) {
  if (str[i].length > total) {
    total = str[i].length;
    longestWord = str[i];
  }
}

console.log(longestWord); // 'force'*/

//=================================
/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
/*
const emptyMussive = [];
let total = 0;
let addUss;
let i;
do {
  addUss = prompt();
  emptyMussive.push(+addUss);
} while (addUss !== null);

if (emptyMussive.length !== 0) {
  for (i of emptyMussive) {
    total += i;
  }
  console.log(total);
}*/
//=================================
/*
  ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];
const min = prompt("Введите число x");
const max = prompt("Введите число y");
const addNum = +prompt("Введите цифру между x и y");
if (isNaN(addNum)) {
  alert("Было введено не число");
} else if (numbers.includes(addNum)) {
  alert("Поздравляем, Вы угадали!");
} else {
  alert("Сожалеем, Вы не угадали!");
}
