'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if(isNumber(a) && isNumber(b)) return a + b;
  return 'Input must be a number';
};

arithmetic.subtract = (a, b) => {
  if(isNumber(a) && isNumber(b)) return a - b;
  return 'Input must be a number';
};

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}