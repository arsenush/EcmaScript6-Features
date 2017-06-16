// Arrays
let names = ['Vova', 'Gena', 'Petro', 'Albert'];

// ES5
var vova = names[0];
var gena = names[1];
var petro = names[2];
var albert = names[3];

// ====================================

// ES6
let [vova, gena, petro, albert] = names; // more, less, skip, rest, default, inner array

console.log(vova, gena, petro, albert);

// ====================================

// Function destructive assignment
function rewardWinners([firstPlace, secondPlace, thirdPlace]) {
  reward(firstPlace, 1);
  reward(secondPlace, 2);
  reward(thirdPlace, 3);
}

function reward(person, place) {
  console.log(`Congrats, ${person}. You got the ${place} place!`);
}

rewardWinners(names);

// ====================================

// Objects
let person = {
  firstName: "Gena",
  lastName: "Shpak"
};

// ====================================

// ES5
var firstName = person.firstName;
var lastName = person.lastName;

// ====================================

// ES6
let {firstName, lastName} = person;

let {firstName : first, lastName : last} = person;
let {firstName : first, lastName : last, age = 25} = person;


console.log(firstName, lastName);
console.log(first, last);

// ====================================



// Nested Objects
let person = {
  firstName: "Gena",
  lastName: "Shpak",
  address: {
    city: "Lviv",
    street: "Kozlaniuka"
  }
};

let {firstName : first, lastName : last, address : {city}} = person;
console.log(first, last, city);

// ====================================

// Functions args
let person = {
  firstName: "Gena",
  lastName: "Shpak",
  address: {
    city: "Lviv",
    street: "Kozlaniuka"
  }
};

function printFullName({firstName, lastName}) {
  console.log(firstName, lastName);
}

printFullName(person);

// ====================================

// Functions return
function getPerson() {
  let person = {
    firstName: "Gena",
    lastName: "Shpak",
    address: {
      city: "Lviv",
      street: "Kozlaniuka"
    }
  }

  return person;
};

let {firstName, address : {city}} = getPerson();

console.log(firstName, city);
