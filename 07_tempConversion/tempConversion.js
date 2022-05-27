const ftoc = function(f) {
  let celcius = (f-32)*(5/9);
  let rounded = Math.round(celcius * 10) / 10;
  return rounded;
};

const ctof = function(c) {
  let fahrenheit = c*(9/5)+32;
  let rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


/* degree F = C*(9/5)+32 */
/* degree C = (F-32)*(5/9) */ 