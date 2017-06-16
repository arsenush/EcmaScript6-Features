// Default parameters

// Ugly
function greet(greeting, name) {
  if(greeting !== undefined && name !== undefined) {
    alert(`${greeting}, ${name}!`);
  } else if (greeting === undefined && name !== undefined) {
    alert(`Hello, ${name}!`);
  } else if (greeting !== undefined && name === undefined) {
    alert(`${greeting}, friend!`);
  } else {
    alert(`Hello, friend!`);
  }
}

// ====================================

// With ES6
function greet(greeting = 'Hello', name = 'friend') {
  alert(`${greeting}, ${name}!`);
}

greet("Hi", "Gena");
greet(undefined, "Gena");
greet("Hi");
greet();

// ====================================


// Rest parameters

// Before ES6
function sum() {
  console.log(arguments);
  // console.log(arguments instanceof Array);

  var sum = 0;

  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });

  console.log(sum);
}

// With ES6
function sum(...values) {
  let sum = 0;

  values.forEach(function (value) {
    sum += value;
  });

  // without using additional variables
  // sum = values.reduce(function (prevValue, currentValue) {
  //   return prevValue + currentValue;
  // });

  console.log(sum);
}

sum(1, 2, 3, 4, 5);
