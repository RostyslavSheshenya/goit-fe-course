'use strict';
//Задание 1
/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/

//const findGreaterThan = (num, arr) => {
//const result = [];
//
//for (let i = 0, max = arr.length; i < max; i += 1) {
//if (arr[i] > num) {
//result.push(arr[i]);
//}
//}

//return result;
//};
/*
const findGreaterThan = (num, arr) => arr.filter((x) => x > num);

console.log(findGreaterThan(2, [ 1, 2, 3, 4, 5 ])); // [3, 4, 5,]
console.log(findGreaterThan(3, [ 1, 2, 3, 4, 5 ])); // [4, 5,]
console.log(findGreaterThan(1, [ 1, 2, 3, 4, 5 ])); // [2, 3, 4, 5,]
*/
/* 
  Функция multiplyBy принимает два аргумента - число и массив. 
  Возвращает массив все значения которого умножены на число.
*/
//const multiplyBy = (num, arr) => {
//let result = [];

//for (let i = 0, max = arr.length; i < max; i += 1) {
//result.push(arr[i] * num);
//}

//return result;
//};
/*
const multiplyBy = (num, arr) => arr.map((x) => x * num);

console.log(multiplyBy(2, [ 1, 2, 3, 4, 5 ])); // [2, 4, 6, 8, 10]
console.log(multiplyBy(3, [ 1, 2, 3, 4, 5 ])); // [3, 6, 9, 12, 15]
console.log(multiplyBy(4, [ 1, 2, 3, 4, 5 ])); // [4, 8, 12, 16, 20]
*/
/* 
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/
//function summAllNumbers(...args) {
//let accumulator = 0;

//for (let i = 0, max = args.length; i < max; i += 1) {
//accumulator += args[i];
//}

//return accumulator;
//}
/*
const summAllNumbers = (...args) => args.reduce((acc, arg) => acc + arg, 0);

console.log(summAllNumbers(1, 2, 3)); // 6
console.log(summAllNumbers(1, 2, 3, 4)); // 10
console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15
*/
/* 
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
//const findEvery = (num, arr) => {
//for (let i = 0, max = arr.length; i < max; i += 1) {
//	if (arr[i] < num) {
//	return false;
//}
//}

//return true;
//};
/*
const findEvery = (num, arr) => arr.every((x) => x >= num);

console.log(findEvery(5, [ 5, 6, 7, 8, 9 ])); // true
console.log(findEvery(6, [ 5, 6, 7, 8, 9 ])); // false
console.log(findEvery(4, [ 5, 6, 7, 8, 9 ])); // true
*/
//===========================
/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*
const guests = [
	{ name: 'Mango', age: 20, isActive: true },
	{ name: 'Poly', age: 18, isActive: false },
	{ name: 'Ajax', age: 30, isActive: true },
	{ name: 'Chelsey', age: 45, isActive: false }
];
*/
//const getPropValues = (arr, prop) => {
//const mass = [];
//for (let i in arr) {
//if (arr[i]) {
//	mass.push(arr[i][prop]);
//}
//}
//return mass;
//};
/*
const getPropValues = (arr, prop) => arr.map((arr) => arr[prop]);
// Вызовы функции для проверки
console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log(getPropValues(guests, 'age')); // [20, 18, 30, 45]

console.log(getPropValues(guests, 'isActive')); // [true, false, true, false]
*/
//=============================
/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*
const users = [
	{ name: 'Mango', inactiveDays: 15, isActive: true },
	{ name: 'Poly', inactiveDays: 8, isActive: false },
	{ name: 'Ajax', inactiveDays: 32, isActive: false },
	{ name: 'Chelsey', inactiveDays: 85, isActive: true }
];
*/
/*
const setGuestState = (guests, period) => {
	const mass = [];
	let guest;
	for (let i in guests) {
		guest = guests[i];
		if (guest.inactiveDays < period) {
			guest.isActive = true;
			console.log(`${guest.name}:${guest.isActive}`);
		} else {
			guest.isActive = false;
			console.log(`${guest.name}:${guest.isActive}`);
		}
	}
};
*/
/*
const setGuestState = (guests, period) =>
	guests.map(
		(x) => ({ ...x, isActive: x.inactiveDays < period })

		//(guests) =>
		//guests.inactiveDays < period
		//? ((guests.isActive = true), console.log(`${guests.name}:${guests.isActive}`))
		//: ((guests.isActive = false), console.log(`${guests.name}:${guests.isActive}`))
  );
  */
// Вызовы функции для проверки
/*
console.log(setGuestState(users, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(setGuestState(users, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(setGuestState(users, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
*/
//======================
/*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*
const guests = [
	{ name: 'Mango', age: 20, isActive: true },
	{ name: 'Poly', age: 18, isActive: false },
	{ name: 'Ajax', age: 30, isActive: true },
	{ name: 'Chelsey', age: 45, isActive: false }
];
const getActiveGuests = (guests) => guests.filter((x) => x.isActive);
// Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
*/
//=============================/*
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*
const guests = [
	{ name: 'Mango', age: 20, isActive: true },
	{ name: 'Poly', age: 18, isActive: false },
	{ name: 'Ajax', age: 30, isActive: true },
	{ name: 'Chelsey', age: 45, isActive: false }
];

const getGuestsOlderThan = (guests, age) => guests.filter((x) => x.age > age);
// Вызовы функции для проверки
console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(getGuestsOlderThan(guests, 55)); // []
*/
//=============================
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
/*
const guests = [
	{ id: 1, name: 'Mango', age: 20 },
	{ id: 2, name: 'Poly', age: 18 },
	{ id: 3, name: 'Ajax', age: 30 },
	{ id: 4, name: 'Chelsey', age: 45 }
];

const getGuestById = (guests, id) => guests.find((x) => x.id === id);

// Вызовы функции для проверки
console.log(getGuestById(guests, 3)); // {id: 3, name: 'Ajax', age: 30}

console.log(getGuestById(guests, 1)); // {id: 1, name: 'Mango', age: 20}

console.log(getGuestById(guests, 5)); // undefined
*/
//====================
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/
/*
const order = {
	bread: 10,
	apples: 25,
	chicken: 60,
	milk: 15,
	cheese: 40
};



const arrOrder = (obj) => {
  const arr = [];
	for (let key in obj) {
		arr.push(obj[key]);
	}
	return arr;
};
const changeOrder = (callback) => callback.reduce((acc, x) => acc + x, 0);
console.log(changeOrder(arrOrder(order))); // 150
*/
//================================
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/
/*
const products = {
	bread: 10,
	milk: 15,
	apples: 20,
	cheese: 30,
	chicken: 40
};

const orderA = {
	bread: 2,
	apples: 4,
	chicken: 1
};

const orderB = {
	bread: 1,
	milk: 2,
	cheese: 3
};
const arrOrder = (obj) => {
	const arr = [];
	for (let key in obj) {
		arr.push(obj[key]);
	}
	return arr;
};

const getTotalPrice = (products, order) =>
	// Вызовы функции для проверки
	console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130
*/
//==================================================
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

const guestsA = [
	{ name: 'Mango', isActive: true },
	{ name: 'Poly', isActive: false },
	{ name: 'Ajax', isActive: true }
];

const guestsB = [
	{ name: 'Mango', isActive: true },
	{ name: 'Poly', isActive: true },
	{ name: 'Ajax', isActive: true }
];
const allGuestsActive = (guests) => guests.every((y) => guests.isActive);
// Вызовы функции для проверки
console.log(allGuestsActive(guestsA)); // false

console.log(allGuestsActive(guestsB)); // true

//===================================================================================================
