const calculateRectangleArea = function (L, l) {
  const surface = L * l;

  return surface;
};

console.warn(`1.un camp dreptunghiular de hamei produce 25kg/m2.
Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?`);
const barleyYield = 25;
const surface1 = calculateRectangleArea(100, 250);
const surface2 = calculateRectangleArea(350, 200);
const yield1 = surface1 * barleyYield;
const yield2 = surface2 * barleyYield;
let yieldDiff = Math.abs(yield1 - yield2);

console.log(yieldDiff);

console.warn(`2.10kg de hamei produc 2.5l de bere
cati litri de bere va produce un teren de 400m pe 370m`);

const beerYield = 2.5 / 10;
const surface3 = calculateRectangleArea(400, 370);
const yield3 = surface3 * barleyYield;
const totalLiters = beerYield * yield3;

console.log(totalLiters);

// 3. Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina.
//  Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri
// stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.

console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2 3de faina.
Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri
 stiind ca dintr-un kilogram de faina ies 2.5 kg de paine. JESUS!!!`);

const wheatSurface = calculateRectangleArea(300, 200);
const flour = wheatSurface * 32;
const bread = flour * 2.5;

console.log(bread);

// 4.Dar doua campuri de 150 pe 200 si 500 pe 300 in total?

console.warn('doua campuri de 150 pe 200 si 500 pe 300 in total?');
const field1 = calculateRectangleArea(150, 200);
const field2 = calculateRectangleArea(500, 300);
const flour1 = field1 * 32;
const flour2 = field2 * 32;
const bread1 = 2.5 * flour1;
const bread2 = 2.5 * flour2;

console.log(bread1 + bread2);
