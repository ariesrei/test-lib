(function () {
'use strict';

/********************
| 	Class Calculator
|*********************/

class Calculator {

	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	multiply(a, b) {
		b = typeof b !== 'undefined' ? b : 1;
		return a * b;
	}

	add(a, b) {
		alert(a + b);

		return a + b;
	}

}

/********************
| Class Email
|*********************/

class Email {

	constructor(name) {

		var self = this;

		//self.el = document.getElementById("demo");
		//self.el.innerHTML = "Convert email";
		//self.el.addEventListener("click", self.convert.bind(self));

		self.el = window;
		self.el.addEventListener("load", self.convert.bind(self));
	}

	convert() {

		var queryClass = document.querySelectorAll(".emailTo"),
		    countClass = queryClass.length,
		    i;

		//alert(countClass);

		if (countClass != 0) {

			for (i = countClass; i--;) {
				var email = document.getElementsByClassName('emailTo')[i],
				    array = [email];

				array.forEach(function (element) {

					var user = element.innerHTML || false;
					var domain = element.getAttribute('data-url').replace('http://www.', '').replace('www.', '').replace('http://', '').replace('/', '') || false;

					var newEmail = user + '@' + domain;

					element.outerHTML = '<a href="mailTo:' + newEmail + '">' + newEmail + '</a>';
				});
			}
			//document.getElementsByClassName('btn')[0].style.display = 'none';	
		}
	}
}

// src/main.js
//import { version } from '../package.json';
//import { mailTo } from '../lib/mailTo';    // import fn

// var test = new Calculator();
// alert(test.multiply(2,3));

var convert = new Email();

//var module = module;
module.exports = { Calculator, Email };
//export { Calculator, Email }

}());
