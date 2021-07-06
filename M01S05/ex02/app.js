// +info: functiile se urca in context prin procesul de hoisting

function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(
  '1.Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3',
);
console.log(calculateRectangleArea(4, 3));

console.warn(
  '2.Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile',
);
const recta1 = calculateRectangleArea(5, 3);
const recta2 = calculateRectangleArea(3, 2);

console.log(recta1 + recta2);

console.warn(
  '3.Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.',
);
const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);
