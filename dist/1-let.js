// Global variable - 1
//
// function testFn() {
//   alert(test);
//
//   if (true) {
//       var test = 5;
//   }
//
//   alert(test);
// }
//
// testFn();


// Global variable - 2

// var test = 7; //
//
// function testFn() {
//   alert("inside1: " + test);
//
//   if (true) {
//       var test = 5; // var
//   }
//
//   alert("inside2: " + test);
// }
//
// testFn();
// alert("outside: " + test);


// "let" example

// var test = 5;
//
// function testFn() {
//   alert("begin: " + test);
//
//   if (true) {
//       alert("inside 'if' before init: " + test);
//       var test = 5; // let _
//       alert("inside 'if' after init: " + test);
//   }
//
//   alert("end: " + test);
// }
//
// testFn();


// "let" on practice
// var buttons = document.querySelectorAll("button");
// alert(buttons.length);
//
// for (var i = 0; i < buttons.length; i++) {
//   var button = buttons[i]
//   button.innerText = i;
//   button.onclick = function (e) {
//     alert(i);
//   }
// }
"use strict";