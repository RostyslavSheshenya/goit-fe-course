'use strict';
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// function Account(login, email, friendsCount) {
// 	this.login = login;
// 	this.email = email;
// 	this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInfo = function() {
// 	console.log(`Login:${this.login}; E-mail:${this.email}; Count:${this.friendsCount}`);
// };
// const x = new Account('admin', 'zuemir50@gmail.com', 11);
// x.getAccountInfo();
// const y = new Account('hfdhfdhb', 'jfdjhcdnhj', 25);
// y.getAccountInfo();
//==========================================================================================
/*
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/

// class StringBuilder {
// 	constructor(value) {
// 		this.value = value;
// 	}
// 	showValue() {
// 		console.log(this.value);
// 	}
// 	append(str) {
// 		this.value = this.value + str;
// 	}
// 	prepend(str) {
// 		this.value = str + this.value;
// 	}
// 	pad(str) {
// 		this.value = str + this.value + str;
// 	}
// }

// const stringBuilder = new StringBuilder('.');

// stringBuilder.append('^');

// stringBuilder.showValue(); // '.^'

// stringBuilder.prepend('^');
// stringBuilder.showValue(); // '^.^'

// stringBuilder.pad('=');
// stringBuilder.showValue(); // '=^.^='
//=========================================================================
/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
// 	constructor(maxSpeed) {
// 		this.speed = 0;
// 		this.maxSpeed = maxSpeed;
// 		this.running = false;
// 		this.distance = 0;

// 		/*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.

//           - maxSpeed - для хранения максимальной скорости

//           - running - для отслеживания заведен ли автомобиль,
//             возможные значения true или false. Изначально false.

//           - distance - содержит общий киллометраж, изначально с 0
//       */
// 	}

// 	turnOn() {
// 		this.running = true;
// 		// Добавьте код для того чтобы завести автомобиль
// 		// Просто записывает в свойство running значание true
// 	}

// 	turnOff() {
// 		this.running = false;
// 		// Добавьте код для того чтобы заглушить автомобиль
// 		// Просто записывает в свойство running значание false
// 	}

// 	accelerate(spd) {
// 		if (spd < this.maxSpeed) {
// 			this.speed = spd;
// 		}
// 		// Записывает в поле speed полученное значение, при условии что
// 		// оно не больше чем значение свойства maxSpeed
// 	}

// 	decelerate(spd) {
// 		if (spd < this.maxSpeed && spd > 0) {
// 			this.speed = spd;
// 		}
// 		// Записывает в поле speed полученное значение, при условии что
// 		// оно не больше чем значение свойства maxSpeed и не меньше нуля
// 	}

// 	drive(hours) {
// 		if (this.running) {
// 			this.distance = this.maxSpeed * hours;
// 		}
// 		// Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
// 		// но только в том случае если машина заведена!
// 	}
// 	// static getSpecs() {
// 	// 	console.log(`maxSpeed: ${this.maxSpeed}, running: ${this.running}, distance: ${this.distance}`);
// 	// }
// }
// Car.getSpecs = function(car) {
// 	console.log(`maxSpeed: ${car.maxSpeed}, running: ${car.running}, distance: ${car.distance}`);
// };

// const car = new Car(100);
// console.log(car.running);
// car.turnOn();
// // console.log(car.running);
// // car.turnOff();
// console.log(car.running);
// car.decelerate(60);
// console.log(car.speed);
// car.drive(5);
// console.log(car.distance);
//=====================================================================================
/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  */
// const someCar = new Car(100);
// someCar.turnOn();
// someCar.drive(2);
// console.log(someCar.maxSpeed);
// console.log(someCar.running);
// console.log(someCar.distance);

// Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
//============================================================
/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

// class Car {
// 	constructor(maxSpeed, value) {
// 		this._value = value;
// 	}
// 	get valu() {
// 		return this._value;
// 	}
// 	set value(val) {
// 		return (this._value = val);
// 	}
// }
// const myCar = new Car(50, 3000);

// console.log(myCar.valu); // 2000
// myCar.value = 4200;
// console.log(myCar.valu); // 4000

class Student {
	constructor() {}
}
console.log(typeof Student === 'function');
const x = Object.create({ a: 1 });
console.log(x);
