'use strict';

var version = "1.0.0";

/********************
| 	lib/multiply
|*********************/
function multiply(a, b) {

  b = typeof b !== 'undefined' ? b : 1;
  return a * b;
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
			var domain = element.getAttribute('href').replace('http://www.', '').replace('www.', '').replace('http://', '').replace('/', '') || false;

			var newEmail = user + '@' + domain;

			element.innerHTML = '<a href="mailTo:' + newEmail + '">' + newEmail + '</a>';
		});
	}
}

// src/main.js
var main = (() => {
  console.log('version ' + version);
});

// Run some functions from our imported modules.
//const result1 = multiply(2, 4);

// Print the results on the page.
//const printTarget = document.getElementsByClassName('debug__output')[0];
//printTarget.innerText = `multiply(2, 4) => ${result1}\n\n`;


module.exports = { multiply, mailTo };

module.exports = main;
