"use strict";
const password = ["qwerty", "west", "exit", "1234"];
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
}

/*
Напишите скрипт, который выводит через console.log все 
числа от min до max, с двумя исключениями: 
  
  - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
  
  - Для исел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
  
PS: используйте цикл for


/*const min = 1;
const max = 100;
const massive = [];
const mass3 = [];

for (let i = min; i <= max; i += 1) {
  massive.push(i);
  if (i % 3 === 0) {
    console.log(i);
  }
  if (i % 5 === 0) {
    console.log(i);
  }
}
console.log(massive);*/
