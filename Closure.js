// function constructHello(name) {
//   const _greeting = "Hello there buddy. Pleasure to meet you ";
//   const date = Date.now();
//   console.log(date.getFullYear());
//   return function (name) {
//     return `${_greeting} ${name}. The time is ${date}`;
//   };
// }

// const hello = constructHello();
// console.log(hello("James"));
// console.log(hello("Curtis"));
function instructionGenerator() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

const fnGenerator = instructionGenerator();
const tenBy2 = fnGenerator(10);
const fiveBy2 = fnGenerator(5);
const twentyBy2 = fnGenerator(20);
const fiftyBy2 = fnGenerator(50);
// console.log(tenBy2);
// console.log(fiveBy2);
// console.log(twentyBy2);
// console.log(fiftyBy2);

function internalCounter() {
  let count = 0;
  return function incrementCount() {
    count++;
    console.log(count);
  };
}

const increment = internalCounter();
increment();
increment();
increment();
increment();
increment();
increment();

function userCreator(name, score) {
  const newUser = Object.create(userCreatorStore);
  newUser.score = score;
  newUser.name = name;
  return newUser;
}

const userCreatorStore = {
  increment: function () {
    this.score++;
  },
  name: function () {
    console.log(this.name);
  },
  score: function () {
    return this.score;
  },
  message: function () {
    return `${this.name}'s score is ${this.score}`;
  },
};

const jimmy = new userCreator("Jimmy", 0);
const sally = userCreator("Sally", 0);
jimmy.increment();
jimmy.increment();
jimmy.increment();
jimmy.increment();

sally.increment();
sally.increment();
sally.increment();
sally.increment();
sally.increment();
sally.increment();
sally.increment();
sally.increment();
console.log(jimmy);
console.log(sally);
console.log(jimmy.message());
console.log(sally.message());
