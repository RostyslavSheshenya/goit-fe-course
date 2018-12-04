"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const goodLogin = "Логин успешно добавлен!";
const errorLogin = "Такой логин уже используется!";
const errorSymbolLogin = "Ошибка! Логин должен быть от 4 до 16 символов!";

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (login, allLogins) => allLogins.includes(login);

const addLogin = (newLogin, arrLogins = logins) => {
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

console.log(addLogin("Ajax"));
console.log(addLogin("robotGoogles"));
console.log(addLogin("Zod"));
console.log(addLogin("jqueryisextremelyfast"));

const checkNumberType = num => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkNumberType(3)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'
