'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic tests', () => {
  describe('testing arithmetic.add', () => {
    it('should return 2', () => {
      expect(arithmetic.add(1, 1)).toEqual(2);
    });
    it('should return input must be a number', () => {
      expect(arithmetic.add('a', 1)).toEqual('Input must be a number');
    });
    it('should return input must be a number', () => {
      expect(arithmetic.add(1, 'b')).toEqual('Input must be a number');
    });
  });

  describe('testing arithmetic.subtract', () => {
    it('should return 1', () => {
      expect(arithmetic.subtract(2, 1)).toEqual(1);
    });
    it('should return input must be a number', () => {
      expect(arithmetic.subtract('a', 1)).toEqual('Input must be a number');
    });
    it('should return input must be a number', () => {
      expect(arithmetic.subtract(1, 'b')).toEqual('Input must be a number');
    });
  });
});