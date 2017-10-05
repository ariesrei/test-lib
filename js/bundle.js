'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/********************
| 	lib/multiply
|*********************/

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

			element.outerHTML = '<a style="display: block;" href="mailTo:' + newEmail + '">' + newEmail + '</a>';
		});
	}

	document.getElementsByClassName('btn')[0].style.display = 'none';
}

// src/main.js

//module.exports = { Calculator }

exports.Calculator = Calculator;
exports.mailTo = mailTo;
