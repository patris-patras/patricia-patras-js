// square surface
const processArguments = process.argv;
const [nodePath, modulePath, ...arguments] = processArguments; // ... => rest operator
console.log(arguments);

if (arguments.length !== 1) {
  console.log('Ne trebuie un parametru, latura patratului');
  process.exit(0); // opreste procesul
}

let value = arguments[0];
value = parseFloat(value);

if (isNaN(value)) {
  console.log('Latura trebuie sa fie numerica');
  process.exit(0);
}

console.log(calculateSquareSurface(value));

// hoisting
function calculateSquareSurface (l) {
  return l ** 2;
}
