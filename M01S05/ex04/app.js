const calculateRectangleArea = (L, l) => {
  const surface = L * l;

  return surface;
};

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m,
stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.
“Suprafata de tapet necesara este: xxx metri patrati`);
let shortWallSurface = calculateRectangleArea(4, 2.5);
let longWallSurface = calculateRectangleArea(6, 2.5);
let totalWallSurface = (shortWallSurface + longWallSurface) * 2;
let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowSurface = calculateRectangleArea(2, 1.5);
let wallpaperSurface = totalWallSurface - doorSurface - windowSurface;
console.log(`Suprafata de tapet este: ${wallpaperSurface} metri patrati.`);

console.warn(`Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea()
care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
`);
//O functie wrapper este o functie care “imbraca” o functie existenta
//pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile

const calculateSquareArea = (L) => {
  const squareSurface = calculateRectangleArea(L, L);

  return squareSurface;
};

console.log(calculateSquareArea(5));

// 4. Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m,
//stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.
//  “Suprafata de tapet necesara este xxx metri patrati.”
shortWallSurface = calculateRectangleArea(12, 2.5);
longWallSurface = calculateRectangleArea(9, 2.5);
totalWallSurface = (shortWallSurface + longWallSurface) * 2;
doorSurface = calculateRectangleArea(3, 2);
windowSurface = calculateRectangleArea(2, 3);
wallpaperSurface = totalWallSurface - doorSurface - windowSurface;
console.log(
  `Suprafata de tapet necesara este: ${wallpaperSurface} metri patrati.`,
);

// 5.Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii:
// latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().

const aggregateSurfaceArea = (L1, l1, L2, l2) => {
  const surfaceSum =
    calculateRectangleArea(L1, l1) + calculateRectangleArea(L2, l2);

  return surfaceSum;
};

// 6. Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102.
console.log(aggregateSurfaceArea(48, 92, 51, 102));
