"use strict";
//Задание 1

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

/*const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
//console.log(user);
user.mood = "happy";
user.hobby = "javascript";
delete user.premium;
for (let key in user) {
  //console.log(key, user[key]);
}
const keys = Object.keys(user);
for (let key of keys) {
  //console.log(key, user[key]);
}
const entries = Object.entries(user);
for (let [key, value] of entries) {
  console.log(key, value);
}

//console.log(user);*/

//===========================
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

/*const tasksCompleted = {
  ann: 29,
  david: 350,
  helen: 1000,
  lorence: 99
};

//const temp = tasksCompleted.ann;

/*for (let key in tasksCompleted) {
  console.log(tasksCompleted[key]);
  if (tasksCompleted[key] > temp) {
    temp === tasksCompleted[key];
    console.log(temp);
  }
}*/

/*let temp = 0;
const keys = Object.keys(tasksCompleted);
//console.log(keys);
for (let key of keys) {
  //console.log(tasksCompleted[key]);
  if (tasksCompleted[key] > temp) {
    temp = tasksCompleted[key];
  }
}
console.log(temp);*/

//=============================
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

/*const countProps = obj => {
  let count = 0;
  const entries = Object.entries(obj);
  for (let [key, value] of entries) {
    //console.log(key, value);
    if (key) {
      count += 1;
    }
  }
  return count;
};
// Вызовы функции для проверки
console.log(countProps({})); // 0

console.log(countProps({ a: 1, m: 2, b: 3, c: 4, n: 5, k: 6, l: 7 })); // 3*/
//======================
/*  
  Напишите функцию countTotalSalary((salaries)),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.*/
/*const countTotalSalary = salaries => {
  let sum = 0;
  const entries = Object.entries(salaries);
  for (let [key, value] of entries) {
    if (value) {
      sum += value;
    }
  }
  return sum;
};
//console.log(sum);
//return sum;
// Вызовы функции для проверки
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
    alfre: 80
  })
); // 330*/
//=============================/*
/*Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
/*const getAllPropValues = (arr, prop) => {
  let obj;
  let mass = [];
  for (let i in arr) {
    obj = arr[i];
    //console.log(obj);
    for (let key in obj) {
      if (prop === key) {
        mass.push(obj[key]);
        //console.log(obj[key]);
      }
    }
  }
  return mass;
};

const users = [
  { name: "Poly", age: 7, mood: "happy" },
  { name: "Mango", age: 4, mood: "blissful" },
  { name: "Ajax", age: 3, mood: "tired" }
];
//console.log(users[1]["name"]);
// Вызовы функции для проверки
console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, "mood")); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, "active")); // []*/

//=============================
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
/*function User(name, isActiv, age, friends) {
  (this.name = "name"),
    (this.isActiv = true),
    (this.age = Number),
    (this.friends = Number);
  this.getUserInfo = function() {
    console.log(`User ${name} is ${age} years old and has ${friends} friends`);
  };
}
const user1 = new User("Ludmila", true, 32, 25);
const user2 = new User("Rostyslav", false, 37, 0);
user2.getUserInfo();*/

//========================
/*  
  Расставьте отсутствующие this в методах объекта store


const store = {
  products: ["bread", "cheese", "milk", "apples"],
  managers: ["poly", "mango", "ajax"],
  addManager(manager) {
    this.managers.push(manager);

    console.log(this.managers);
  },
  removeManager(manager) {
    const idx = this.managers.indexOf(manager);

    this.managers.splice(idx, 1);

    console.log(this.managers);
  },
  getProducts() {
    console.log(this.products);

    return this.products;
  }
};

store.addManager("chelsey"); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager("mango"); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']*/

//====================
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    password = newPassword;

    return password;
  };

  this.getAccountInfo = function() {
    return `
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `;
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

console.log(account.changePassword("asdzxc")); // 'asdzxc'

console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
