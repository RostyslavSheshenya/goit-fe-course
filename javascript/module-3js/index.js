"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const goodLogin = "Логин успешно добавлен!";
const errorLogin = "Такой логин уже используется!";
const errorSymbolLogin = "Ошибка! Логин должен быть от 4 до 16 символов!";

const isLoginValid = login => {
  let isValid;
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};
//console.log(isLoginValid("log"));

const isLoginUnique = (allLogins, login) => !allLogins.includes(login);
//console.log(isLoginUnique(logins, "Majgo"));

const addLogin = (newLogin, arrLogins) => {
  if (!isLoginValid(newLogin)) {
    console.log(errorSymbolLogin);
    return;
  }
  if (isLoginUnique(logins, newLogin)) {
    logins.push(newLogin);
    console.log(goodLogin);
  } else {
    console.log(errorLogin);
  }
};

addLogin("Ajax"); // 'Логин успешно добавлен!'
//console.log(logins);
addLogin("robotGoogles"); // 'Такой логин уже используется!'
addLogin("Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin("jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
