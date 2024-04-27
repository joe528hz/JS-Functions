'use strict';
// Default Parameter ************************************************************************************************
// defaul value can contain any expression also you can use the other parameter before it as part of the expression
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 199 * numPassenger // you can use other parameter before "price" as part of the expression
// ) {
//   //ES5
//   // numPassenger = numPassenger || 1;
//   // price = price || 299;
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   // console.log(booking);
//   bookings.push(booking);
// };

// console.log(bookings);

// createBooking(2, 81, 89);
// createBooking(2);
// createBooking(2, undefined, 299);

// HOW PASSING ARGUMENT WORKS value VS reference ************************************************************************************************
// const flight = 'LH312';
// const joel = {
//   name: 'Joel Malazarte',
//   passport: 123456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'L325'; // dle ma change ang value sa flight if mag manipulate sulod sa function
//   passenger.name = 'Mr. ' + passenger.name; // ma change ang value joel object if mag manipulate sulod sa function must REMEMBER

//   if (passenger.passport === 123456789) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// const passportChange = function (passenger) {
//   passenger.passport = Math.trunc(Math.random() * 1000000000);
// };

// passportChange(joel);
// checkIn(flight, joel);
// console.log(flight, joel);

// FUNCTIONS RETURNING FUNCTION ************************************************************************************************
// const interviewQuestion = function (job) {
//   switch (job) {
//     case 'teacher':
//       return function (name) {
//         console.log(`What subject do you teach ${name}?`);
//       };
//     case 'lawyer':
//       return function (name) {
//         console.log(`How long do you practise ${name}?`);
//       };
//     case 'developer':
//       return function (name) {
//         console.log(`What language you master ${name}?`);
//       };
//     default:
//       return function (name) {
//         console.log(`How are you doing ${name}?`);
//       };
//   }
// };

// const interviewQuest = interviewQuestion('teacher');
// console.log(interviewQuest('joel'));
// console.log(interviewQuestion('teacher')('karen'));

// BIND METHOD ************************************************************************************************

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
  // This generates [0,0,0,0] more on the next session
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `What is your favourite programming language?\n ${this.options.join(
          '\n'
        )} \n(Write option number)`
      )
    );

    //register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(' ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
