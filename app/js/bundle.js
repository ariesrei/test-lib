'use strict';

var version = "1.0.0";

/*
| lib/multiply
*/
function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 1;
  return a * b;
}

// src/main.js
var main = function () {
  console.log('version ' + version);
};

// Run some functions from our imported modules.
const result1 = multiply(2, 4);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];
printTarget.innerText = `multiply(2, 4) => ${result1}\n\n`;

module.exports = main;
