'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);

// Person.prototype.calcAge = function () {
//   console.log(2037-this.birthYear)
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear)
//   this.course = course
// }

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function() {
//   console.log(`My name is ${this.firstName} and I am studying ${this.course}.`)
// }

// const mike = new Student('Mike', 2020, 'Computer Science')
// console.log(mike)
// mike.introduce()
// mike.calcAge()


// console.log(Person.prototype);

// Person.prototype.species = 'home sapien';

// console.log('jonas', jonas.__proto__);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.__proto__);

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h */

//First example

// const Car = function (make, speed){
// this.make = make;
// this.speed = speed;
// }

// Car.prototype.accelerate = function (speed) {
// this.speed +=10;
// console.log(this.speed)
// }

// Car.prototype.brake = function (speed) {
// this.speed -=5
// }

// const car1 = new Car('Volvo', 55)
// const car2 = new Car('Chevy', 75)

// console.log(car1)
// console.log(car2)

// car1.accelerate()
// car1.accelerate()
// car1.accelerate()
// car1.accelerate()


//class declaration
class PersonCl{
constructor(firstName, birthYear){
this.firstName = firstName
this.birthYear = birthYear
}
calcAge() {
  // console.log(2023 - this.birthYear)
}
}

const jess = new PersonCl('Jess', 1990)
// console.log(jess)
jess.calcAge()

const account = {
  owner: 'zach',
  movements: [100,200,300,400],

  set latest (mov) {
    return this.movements.push(mov)
  },

  get age () {
return 2037 - this.birthYear
  }
}

// console.log(account.latest)
account.latest =600
// console.log(account.movements)

PersonCl.hey = function() {
  // console.log('Hello')
}

PersonCl.hey()

class StudentCL extends PersonCl{
constructor(fullName, birthYear, course) {
  super(fullName, birthYear)
  this.course = course
}
introduce() {
  console.log(`My name is ${this.fullName} and I'm studying ${this.course}`)
}
}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science')
// console.log(martha)

//Object.create

const PersonProto = {
  calcAge() {
    console.log(2037-this.birthYear)
  },
  init(firstName, birthYear) {
this.firstName = firstName
this.birthYear = birthYear
  }
}

const Steven = Object.create(PersonProto)
// console.log(Steven)

Steven.name='Steven'
Steven.birthYear = 2004
// Steven.calcAge()

// console.log(Steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1979)
// sarah.calcAge()

//Second Example

// class CarClass {constructor (make, speed){
// this.make = make;
// this.speed = speed;
// }

// accelerate() {
// this.speed +=10;
// console.log(this.speed)
// }

// brake() {
// this.speed -=5
// }

// get speedUS() {
//   return this.speed /1.6
// }

// set speedUS(speed) {
//   this.speed = speed *1.6
// }
// }

//Third Exercise

const Car = function (make, speed){
this.make = make;
this.speed = speed;
}

Car.prototype.accelerate = function (speed) {
this.speed +=10;
console.log(this.speed)
}

Car.prototype.brake = function (speed) {
this.speed -=5
}

const EV = function(make,speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}

//Link prototypes
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo
}

const ev1 = new EV('Tesla', 100, 95)
// console.log(ev1)

ev1.chargeBattery(120)
ev1.brake(50)

// console.log(ev1)

const PersonProto2 = {
  calcAge() {
    console.log(2037-this.birthYear)
  },
  init(firstName, birthYear) {
this.firstName = firstName
this.birthYear = birthYear
  }
}

const StudentProto = Object.create(PersonProto2)
StudentProto.init = function(firstName, birthYear, course){
  PersonProto2.init.call(this, firstName, birthYear)
  this.course = course
}
const jay = Object.create(StudentProto)
jay.init('JAY', 2010, 'Comp Sci')


//Another Class Example

class Account {
  //Public fields instance
locale = navigator.language;

//Private fields
#movements = [];
#pin;

  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    this.#pin = pin
    // this._movements = []
    this.locale = navigator.language
  }

  getMovements() {
return this.#movements
  }

  deposit(val){
  this.#movements.push(val)
 }
withdraw(val) {
  this.deposit(-val)
}

withdraw(val) {
  this.deposit(-val)
}

requestLoan(val) {
  if(this.#approveLoan(val)) {
    this.deposit(val);
    console.log('Loan Approved')
  }
}

//Private Methods

#approveLoan(val) {
  return true
}


}

const acc1 = new Account ('Zach', 'EUR', 1111)

// acc1.deposit(250)
// acc1.withdraw(250)
// acc1.requestLoan(1000)
// console.log(acc1.getMovements())
// console.log(acc1)







