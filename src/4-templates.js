// Concat before ES6
let gena = {
  name: "Gena",
  surname: "Shashlyk",
  age: 25,
  city: "Miami"
};

let car = "Maserati";

function printGena() {
  alert("Hello, my name is " + gena.name + " " + gena.surname + "! I am " + gena.age + " years old. I live in " + gena.city + ". I'd like tp buy a \"Maserati\"");
}

printGena();

// ====================================

// Concat with ES6
let gena = {
  name: "Gena",
  surname: "Shashlyk",
  age: 25,
  city: "Miami"
};

let car = "Maserati";

function printGena() {
  alert(`Hello, my name is ${gena.name} ${gena.surname}! I am ${gena.age} years old. I live in ${gena.city}. I'd like to buy a "${car}"`);
}

printGena();

// ====================================

// Multiline
function hello() {
  alert(`hello1
         hello2`);
}

hello();

// ====================================

// Templates insode of function
function printSum(a, b) {
  // alert(`${a} + ${b} = ${a + b}`);
  alert(`${a} + ${b} = ${parseInt(a) + parseInt(b)}`);
}

printSum(5,"6");

// ====================================

// Tagging
let name = "Gena";
alert(lowerNameupperName`Hello, ${name}! How are you?`);

function upperName(literals, value) { // What if more than 1 value?
  // console.log(literals, value);
  return literals[0] + value.toUpperCase() + literals[1];
}
