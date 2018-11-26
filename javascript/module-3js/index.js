"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const goodLogin = "Логин успешно добавлен!";
const errorLogin = "Такой логин уже используется!";
const errorSymbolLogin = "Ошибка! Логин должен быть от 4 до 16 символов!";

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (login, allLogins) => allLogins.includes(login);

const addLogin = (newLogin, arrLogins) => {
  if (!isLoginValid(newLogin)) {
    return errorSymbolLogin;
  }
  if (!isLoginUnique(newLogin, logins)) {
    logins.push(newLogin);
    return goodLogin;
  } else {
    return errorLogin;
  }
};

addLogin("Ajax"); // 'Логин успешно добавлен!'
addLogin("robotGoogles"); // 'Такой логин уже используется!'
addLogin("Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin("jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
