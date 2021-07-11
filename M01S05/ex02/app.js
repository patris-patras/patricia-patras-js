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

console.warn(
  '4.Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9',
);
const rectangleSurface = calculateRectangleArea(12, 9);
console.log(rectangleSurface);

console.warn(
  '5.Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile',
);
const rectan1 = calculateRectangleArea(15, 31);
const rectan2 = calculateRectangleArea(8, 9);
const rectan3 = calculateRectangleArea(10, 5);

console.log(rectan1 + rectan2 + rectan3);

console.warn(
  '6.Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.',
);
const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);
