"use strict";
//Задание 1

/*const checkNumberType = num => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkNumberType(3)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'*/
//Задание 2
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
/*const formatString = str => {
  if (str.length < 40) {
    return str;
  } else {
    let result = str.slice(0, 40) + "...";
    return result;
  }
};
// Вызовы функции для проверки
console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка

console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
); // вернется форматированная строка*/

//Задание 3

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
/*const checkForSpam = str => str.includes("sale") || str.includes("SPAM");

// Вызовы функции для проверки
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true*/

//Задание 4

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
/*const getPx = str => {
  if (isNaN(str)) {
    return Number.parseFloat(str);
  } else {
    return null;
  }
};
// Вызовы функции для проверки
console.log(getPx("10px") === 10); // должно быть:  true
console.log(getPx("10.5") === 10.5); // должно быть:  true
console.log(getPx("0") === 0); // должно быть:  true
console.log(getPx(-1)); // должно быть:  null
console.log(getPx(10)); // должно быть:  null*/

//Add5
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/
const findLongestWord = str => {
  var strSplit = str.split(" ");
  var longestWord = strSplit.sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
};

// Вызовы функции для проверки
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'

console.log(findLongestWord("Google do a roll")); // вернет 'Google'

console.log(findLongestWord("May the force be with you")); // вернет 'force'

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
const findLargestNumber = numbers => {
  let long = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > long) {
      long = numbers[i];
    }
  }
  return long;
};
// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // вернет 3

console.log(findLargestNumber([27, 12, 18, 5])); // вернет 27

console.log(findLargestNumber([31, 128, 14, 74])); // вернет 128

//77777777777777777
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers = [2, 1, 4, 9];
const addUniqueNumbers = () => {
  
  uniqueNumbers.push(add);
};
// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
