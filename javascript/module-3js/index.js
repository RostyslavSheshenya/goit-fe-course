"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let isValid;
let isUnique;
const addLog = [];
let add;

const isLoginValid = function(login) {
  for (let i = 0; i < login.length; i += 1) {
    if (login[i].length >= 4 && login[i].length <= 16) {
      isValid = true;
    } else {
      isValid = false;
    }
  }
  return isValid;
};

const isLoginUnique = function(allLogins, login) {
  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins[i] === login) {
      isUnique = false;
      break;
    } else {
      isUnique = true;
    }
  }
  return isUnique;
};

const addLogin = function(login) {
  add = login;
  addLog.push(add);
  isLoginValid(addLog);
  if (isValid) {
    isLoginUnique(logins, add);
    if (isUnique) {
      logins.push(add);
      console.log("Логин успешно добавлен!");
    } else {
      console.log("Такой логин уже используется!");
    }
  } else {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов!");
  }
};
addLogin("Ajax"); // 'Логин успешно добавлен!'
addLogin("robotGoogles"); // 'Такой логин уже используется!'
addLogin("Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin("jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
