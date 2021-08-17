const processArguments = process.argv;
const [, , ...arguments] = processArguments;
// daca nu ai nev de cele din pozitiile alea, nu le pui

if (arguments.length !== 2) {
  console.log('Ne trebuie 2 numere');
  process.exit(0);
}

// console.log(arguments);

// arguments e un array => fac un for deci
arguments.forEach((argument) => {
  if (!validateInputNumber(argument)) {
    console.log(`${argument} nu este numar`);
    process.exit(0);
  }
});

console.log('Suprafata dreptunghiului este: ' + calculateRectangleSurface(...arguments));

// hoisting
function calculateRectangleSurface(L, l) {
  return L * l;
}

function validateInputNumber(number) {
  number = parseFloat(number); // float e numar real, cu ./,

  if (isNaN(number)) {
    return false;
  }

  return true;
} // si aici fac toata validarea din square facuta in afara functiei
