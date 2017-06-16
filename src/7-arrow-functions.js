// Single-line

function add(x, y) {
  return x + y;
}

let add = (x, y) => x + y;

console.log(add(5, 4));


let square = x => x * x;
console.log(square(5));



let greet = () => console.log("Hi!");
greet();

// ====================================

// Multi-line

let multiply = (x, y) => {
  let result = x * y;
  return result;
};

console.log(multiply(5, 7));

// ====================================

// Object returning
let getPerson = () => {name: "Gena"}; // ()
console.log(getPerson());

// ====================================

// Practice

let numbers = [1, 3, 4, 2, 5];
let sum = 0;

numbers.forEach(function (number) {
  sum += number;
});

numbers.forEach(number => sum += number);

let addToSum = (number) => sum += number;
numbers.forEach(addToSum);

console.log(sum);
console.log(addToSum(5));

// ====================================




// behaviour of "this"
let names = ['Petro', 'Albert', 'Olya'];
let person = {
  name: 'Gena',
  ES5
  greet: function () {
    names.forEach(function (name) {
      console.log(this.name + ' says hi to ' + name);
    });
  }

  // ES6
  greet: function () {
    names.forEach((name) => {
      console.log(`${this.name} says hi to ${name}`);
    });
  }

// ====================================

  // Too much ES6
  greet: () => {
    names.forEach((name) => {
      console.log(`${this.name} says hi to ${name}`);
    });
  }
};

person.greet();
