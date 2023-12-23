const convertToCelsius = function(degree) {
  let converted = (degree - 32) * 5 / 9;
  let rounded = parseFloat(converted.toFixed(1));
  return rounded;
};

const convertToFahrenheit = function(degree) {
  let converted = (degree * 9 / 5) + 32;
  let rounded = parseFloat(converted.toFixed(1));
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
