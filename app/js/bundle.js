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

	constructor() {

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

class mainController {

	constructor(appService) {

		var vm = this;

		vm.appService = appService;

		vm.name = '';
		vm.value = '';
		vm.rpn = appService.rpn;
		vm.entry = appService.entry;

		// Functions
		//vm.saveEntry = saveEntry;
		// vm.convert2rpn = convert2rpn;

		// Service
	}

	saveEntry(name, value, appService) {

		//alert("Save!" + name);

		if (name !== '' && value !== '') {
			//alert( name + value );

			if (this.entry == '') {

				this.entry.push({
					name: name,
					value: value
				});
			} else {

				var x = 0,
				    count = this.entry.length;

				for (var i = 0; i < count; i++) {
					x = i;
				}

				if (this.entry[x].name == name) {
					alert("Name already exist!");
				} else {
					this.entry.push({
						name: name,
						value: value
					});
				}
			}

			//this.appService.checkEntry(name, value);

			//appService.checkEntry(name, value);
			//vm.name = '';
			//vm.value = '';
		} else {
			alert('Please fill the fields');
		}
	}

	//   convert2rpn() {
	//   	//appService.calculate(vm.infix);
	// //vm.rpn = dataService.rpn;
	// //appService.compute();
	//   }

}

mainController.$inject = ['appService'];

/********************
| 	Class Services
|*********************/

class appServices {

	constructor() {
		var vm = this;

		vm.dataObject = {
			rpn: 'aspdspa',
			entry: []
			//checkEntry: checkEntry,
			//saveEntry: saveEntry
			// stack: [], // stack for compute function
			// valid: true,
			// validOperators: ['*', 'x', '/', '-', '+'], // valid operators
			// parenthesis_output: [],
			// parenthesis_stack: [],
			// output: [],
			// operator_stack: [],
			// infix: [], // infix expression
			// rpn: [], // reverse polish notation

			// checkFormula, checkFormula,
			// clear: clear,
			// checkPrecedence: checkPrecedence,
			// precedence_3: precedence_3,
			// precedence_2: precedence_2,
			// calculate: calculate,
			// compute: compute, // function compute
			// updateFormula: updateFormula // function updateFormula
		};

		return vm.dataObject;
	}

	checkEntry(name, value) {

		alert(name);
		alert(value);

		

		// if(myentry == '') {
		// 	vm.saveEntry(name, value);	
		// }
		// else {
		// 	var x = 0;

		// 	for(var i = 0; i < vm.entry.length; i++){
		// 		x = i;
		// 	}

		// 	if(vm.entry[x].name == name){
		// 		alert("Name already exist!");
		// 	}
		// 	else {
		// 		vm.saveEntry(name, value);
		// 	}
		// }
	}

	saveEntry(name, value) {
		vm.entry.push({
			name: name,
			value: value
		});
	}

}

class addEntry {

	constructor() {
		var vm = this;
		vm.restrict = 'EA';
		vm.template = '<form ng-submit="mainCtrl.saveEntry(mainCtrl.name, mainCtrl.value)">' + '<input placeholder="Enter name" ng-model="mainCtrl.name"/></td>' + '<input placeholder="Enter value" ng-model="mainCtrl.value"/></td>' + '<button class="plus-btn" type="submit"> + </button>' + '</form>';
	}

}

/* ----------------------
|  MAIN JS
|-----------------------*/

// Angular
document.getElementById("defaultOpen").click();

var convert = new Email(); // on window.load to convert the elements

angular.module('app', []).controller('mainController', mainController).service('appService', appServices).directive('addEntry', addEntry);

module.exports = { Calculator, Email, MainController: mainController, AppService: appServices, AddEntry: addEntry };

}());
