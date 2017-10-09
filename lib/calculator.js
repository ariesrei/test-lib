
/********************
| 	lib/multiply
|*********************/

class Calculator {

	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	multiply(a, b) {
	    b = (typeof b !== 'undefined') ?  b : 1;
  		return a * b;
  	}

  	add(a, b) {
  		return a + b;
	}

}

export default Calculator;