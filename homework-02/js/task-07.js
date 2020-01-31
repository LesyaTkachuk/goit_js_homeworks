/* eslint-disable func-names */
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const mistake = 'Ошибка! Логин должен быть от 4 до 16 символов';
const loginExist = 'Такой логин уже используется!';
const success = 'Логин успешно добавлен!';
const isLoginValid = function(login) {
  return login.length < 4 || login.length > 16;
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    return mistake;
  }
  if (isLoginUnique(allLogins, login)) {
    return loginExist;
  }
  logins.push(login);
  return success;
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
