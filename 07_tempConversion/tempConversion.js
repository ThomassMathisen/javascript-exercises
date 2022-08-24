const ftoc = function(f) {
  const c = (f - 32) * (5/9);
  const rounded = Math.round(c * 10) /10
  return rounded;
};

const ctof = function(c1) {
  f1 = (c1 * 9/5) + 32;
  const rounded1 = Math.round(f1 * 10) /10
  return rounded1;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

