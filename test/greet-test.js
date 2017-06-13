'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('greet tests', () => {
  it('should return Hello, kyle!', ( ) => {
    expect(greet('Kyle')).toEqual('Hello, Kyle!');
  });

  it('should return null', () => {
    expect(greet(1)).toEqual(null);
  });
});