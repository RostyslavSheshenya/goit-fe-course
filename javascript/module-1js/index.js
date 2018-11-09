"use strict";
const cancel = "Отменено пользователем!";
const notCorrect = "Доступ запрещен!";
const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
const welcome = " Добро пожаловать!";

const enterLogin = prompt("Введите Логин");
console.log(enterLogin);
if (enterLogin === null) {
  alert(cancel);
} else if (enterLogin !== adminLogin) {
  alert(notCorrect);
}

if (enterLogin === adminLogin) {
  const enterPassword = prompt("Введите Пароль");
  console.log(enterPassword);
  if (enterPassword === null) {
    alert(cancel);
  } else if (enterPassword !== adminPassword) {
    alert(notCorrect);
  }

  if (enterPassword === adminPassword) {
    alert(welcome);
  }
}
