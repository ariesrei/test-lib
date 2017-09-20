 
//require('../app/js/bundle');
import {multiply} from '../app/js/bundle';

var expect = require('chai').expect;

describe('Karma test', () => {
  it('should be able to add two numbers', () => {
    // should set the timeout of this test to 1000 ms; instead will fail
    expect(multiply(2, 4)).toEqual(8);
 
  });
});

// describe("Karma test ", function() {
  
//   it("should be able to add two numbers", function() {
//   	expect(add(1, 2)).toEqual(3);
//   });

//   // it("should be able to subtract two numbers", function() {
//   //   expect(calculator.subtract(3, 2)).toEqual(1);
//   // });

// });

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });