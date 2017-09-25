
/********************
| 	lib/multiply
|*********************/

class Calculator {

	constructor() {

	}

	multiply(a, b) {
	    b = (typeof b !== 'undefined') ?  b : 1;
  		return a * b;
  	}

}

//module.exports = { Calculator }
export default Calculator;