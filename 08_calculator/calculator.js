const add = function(x, y) {
	return x + y;
};


const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((firstItem, nextItem) => firstItem * nextItem);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let result = num;
  if(num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }  
  return result;
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
