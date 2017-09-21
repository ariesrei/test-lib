
/********************
| 	lib/multiply
|*********************/
// export function multiply(a, b) {

//   b = (typeof b !== 'undefined') ?  b : 1;
//   return a * b;

// }


class Calculator {

	constructor() {

	}

	multiply(a, b) {
	    b = (typeof b !== 'undefined') ?  b : 1;
  		return a * b;
  	}

}

export default Calculator;