const add = function(n1, n2) {
  plus = n1 + n2;
  return plus;
};

const subtract = function(n1, n2) {
	 minus = n1 - n2;
   return minus;
};


const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;

};

const power = function(n1,n2) {
  raise = n1 ** n2;
  return raise;
	
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

