'use strict';

// const bookings = [];

// const createBooking = (flightNum, numPassengers = 1, price = 199) => {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
//   console.log(bookings);
// };

// createBooking('LH123');
// createBooking('LH123', 20, 800);

//Break

// const flight = 'LH234';
// const zach = {
//   name: 'Zach',
//   passport: 23435435,
// };

// const checkIn = (flightNum, passenger) => {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 23435435) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, zach);
// console.log(flight);
// console.log(zach);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10);
// };

// newPassport(zach);
// checkIn(flight, zach);

//Break
//Higher order functions

// const oneWord = str => {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = (str, fn) => {
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

//Break

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Zach');
// greeterHey('John');

// greet('hello')('zach');

//Break

// const delta = {
//   airline: 'Delta',
//   iataCode: 'DD',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// delta.book(239, 'Zach W');
// console.log(delta);

// const united = {
//   name: 'United',
//   iataCode: 'UN',
//   bookings: [],
// };

// const book = delta.book;
// book.call(united, 23, 'Zach');
// console.log(united);
// const flightData = [583, 'George'];
// book.apply(delta, flightData);
// book.call(united, ...flightData);

// const bookDD = book.bind(delta);
// const bookUN = book.bind(united);
// bookUN(23, ' John Smith');
// const bookUN23 = book.bind(delta, 23);

// // w/Event Listeners

// delta.planes = 300;
// delta.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', delta.buyPlane.bind(delta));

// //Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(23));

// const addTaxRate = rate => {
//   return value => {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let favoriteLanguage = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );

//     typeof favoriteLanguage === 'number' &&
//       favoriteLanguage < this.answers.length &&
//       this.answers[favoriteLanguage]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//Closures

// const secureBooking = () => {
//   let passengerCount = 0;

//   return () => {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();

// console.dir(booker);

//More closures

//Example 1:

// let f;

// const g = () => {
//   const a = 23;
//   f = () => {
//     console.log(a * 2);
//   };
// };

// const h = () => {
//   const b = 777;
//   f = () => {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();

//Example 2:

// const boardPassengers = (n, wait) => {
//   const perGroup = n / 3;

//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers.`);
//   }, 1000);

//   console.log(`We will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

// const colorFunction = () => {
//   const body = document.querySelector('body');
//   const newColor = () => {
//     body.style.backgroundColor = 'blue';
//   };
//   document.addEventListener('click', newColor);
// };

// colorFunction();

// const colorFunction = () => {
//   document.querySelector('h1').addEventListener('click', () => {
//     console.log('clicked');
//     document.querySelector('h1').style.color = 'blue';
//   });
// };

// colorFunction();
