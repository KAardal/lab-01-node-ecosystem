'use strict';

module.exports = (name) => {
  if(isString(name)) return `Hello, ${name}!`;
  return null;
};

function isString(s) {
  return /^[A-Za-z]+$/.test(s);
}