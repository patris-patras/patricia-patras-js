const calculateSurface = function (L, l) {
  if (arguments.length === 2) {
    return L * l;
  } else {
    return L ** 2;
  }
};

const calculateSquareSurface = function (side) {
  return calculateSurface(side);
};

console.log(calculateSquareSurface(4));

const calculateRectangleSurface = function (L, l) {
  return calculateSurface(L, l);
};

console.log(calculateRectangleSurface(8, 9));
