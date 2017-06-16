// With callbacks
function applyForVisa(documents, resolve, reject) {
  console.log('Processing a visa request...');
  setTimeout(function () {
    let visa = {id:135124};
    documents.length > 1 ? resolve(visa) : reject("Not enough documents!");
    // resolve(visa);
    // reject('O kurwa!');
  }, 2000);
}

function bookHotel() {
  console.log('Booking a room...');
  setTimeout(function () {
    console.log('Room number 25 has been successfully booked!');
  }, 2000);
}




var documents = ['passport', 'foreign passport'];

applyForVisa(documents, function (visa) {
  console.log(`Visa with id ${visa.id} has been successfully granted`);
  bookHotel();
}, function (error) {
  console.error(`Reject! ${error}`);
});

// ====================================

// With Promises
function applyForVisa(documents) {
  console.log('Processing a visa request...');
  let promise = new Promise(function(resolve, reject) {


    setTimeout(function () {
      let visa = {id:135124};
      documents.length > 1 ? resolve(visa) : reject("Not enough documents!");
      // resolve(visa);
      // reject('O kurwa!');
    }, 2000);


  });

  return promise;
}

function bookHotel() {
  console.log('Booking a room...');
  setTimeout(function () {
    console.log('Room number 28 has been successfully booked!');
  }, 2000);
}


var documents = ['passport', 'foreign passport'];  //less

// make identical
applyForVisa(documents)
    .then(
      (visa) => console.log(`Visa with id ${visa.id} has been successfully granted!`),
      (error) => console.error(error)
    );

// ====================================

// Chains of promises
function applyForVisa(documents) {
  console.log('Processing a visa request...');
  let promise = new Promise(function(resolve, reject) {

    // logic wrapped with the promise
    setTimeout(function () {
      let visa = {id:135124};
      documents.length > 1 ? resolve(visa) : reject("Not enough documents!");
    }, 2000);


  });

  return promise;
}

function bookHotel() {
  console.log('Booking a room...');
  let promise = new Promise(function (resolve, reject) {
    let bookedRoom = 35;
    setTimeout(function () {
      Math.random() > 0.5 ? resolve(bookedRoom) : reject('No free rooms!')
    }, 2000);
  });

  return promise;
}

function buyTickets() {
  console.log('Buying tickets...');
}

function happyHolidays() {
  console.log('Happy Holidays');
}


var documents = ['passport', 'foreign passport'];

applyForVisa(documents)
    .then((visa) => console.log(`Visa with id ${visa.id} has been successfully granted!`))
    .then(bookHotel)
    .then(buyTickets)
    .then(happyHolidays)
    .catch(error => console.error(error));
