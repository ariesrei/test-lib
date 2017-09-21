'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version = "1.0.0";

/********************
| 	lib/multiply
|*********************/
// export function multiply(a, b) {

//   b = (typeof b !== 'undefined') ?  b : 1;
//   return a * b;

// }


class Calculator {

	constructor() {}

	multiply(a, b) {
		b = typeof b !== 'undefined' ? b : 1;
		return a * b;
	}

}

/********************
| 	lib/mailTo
|*********************/
function mailTo() {

	var countClass = document.querySelectorAll(".emailTo"),
	    i;

	for (i = 0; i < countClass.length; i++) {
		var email = document.getElementsByClassName('emailTo')[i];
		var array = [email];

		array.forEach(function (element) {

			var user = element.innerHTML || false;
			var domain = element.getAttribute('data-url').replace('http://www.', '').replace('www.', '').replace('http://', '').replace('/', '') || false;

			var newEmail = user + '@' + domain;

			element.innerHTML = '<a href="mailTo:' + newEmail + '">' + newEmail + '</a>';
		});
	}
}

// src/main.js
//import { multiply } from '../lib/multiply';

var main = (() => {
  console.log('version ' + version);
});

const result1 = new Calculator();
result1.multiply(2, 4);

exports['default'] = main;
exports.Calculator = Calculator;
exports.mailTo = mailTo;
