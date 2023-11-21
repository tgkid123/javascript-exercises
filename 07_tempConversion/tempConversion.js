const convertToCelsius = function(x) {
  celcius = (x-32) * 5 / 9;
  return Number(Number(celcius).toFixed(1));
  //return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(x) {
  fahrenheit = (x * 9 / 5) + 32;
  // return Number(fahrenheit).toFixed(1);
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
