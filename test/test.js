
var test = require('../app/js/bundle');

var expect = require('chai').expect;

describe('Karma test', () => {
  	it('should be able to multiply two numbers', () => {

  		var sds = new test.Calculator();

    	expect( sds.multiply(2, 4) ).equal(8); 
  	});
});