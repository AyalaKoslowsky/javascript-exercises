const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
	let res = 0;
  for (i=0; i<arr.length; i++) {
    res += arr[i];
  }
  return res;
};

const multiply = function(arr) {
  res = 1;
  for (i=0; i<arr.length; i++) {
    res *= arr[i];
  }
  return res;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(num) {
	res = 1;
  for (i=1; i<=num; i++) {
    res *= i;
  }
  return res;
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
