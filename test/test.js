
var test = require('../app/js/bundle');

var expect = require('chai').expect;

describe('Karma test', () => {
  it('should be able to multiply two numbers', () => {

    // should set the timeout of this test to 1000 ms; instead will fail
    expect( test.multiply(2, 4) ).toEqual(8); 

  });
});