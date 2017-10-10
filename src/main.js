// src/main.js
//import { version } from '../package.json';
//import { mailTo } from '../lib/mailTo';    // import fn

import Calculator from '../lib/calculator';
import Email from '../lib/mailTo';


// var test = new Calculator();
// alert(test.multiply(2,3));

var convert = new Email();


//var module = module;
module.exports = { Calculator, Email };
//export { Calculator, Email }