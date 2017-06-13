'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet('Kyle'));

console.log('arithmetic.add(1,1)', arithmetic.add(1,1));
console.log('arithmetic.subtract(2,1)', arithmetic.subtract(2,1));