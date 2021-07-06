const calculateRectangleArea = (L, l) => {
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
