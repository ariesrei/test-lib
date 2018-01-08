
var calc = require('../app/lib/calculator');

var expect = require('chai').expect;

describe('Karma test', () => {
  	it('should be able to multiply two numbers', () => {

  		var times = new calc.Calculator();

    	expect( times.multiply(2, 4) ).equal(8); 
  	});
});