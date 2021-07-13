// let i = 101;

// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 100');
// let i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

console.warn(
  'Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).',
);
// let i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i < 100);

console.warn(
  'Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).',
);
// let i = 1;
// do {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }

//   i++;
// } while (i < 100);

console.warn('4.Modifica exemplul astfel incat bucla sa numere de la 1 la 52 ');
console.warn('5.Modifica exemplul astfel incat bucla sa numere de la 1 la 51');

// let i = 1;
// do {
//   console.log(i);

//   if (i >= 52) {
//     break;
//   }

//   i++;
// } while (i < 100);

console.warn(
  '6.Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)',
);
// let i = 1;
// do {
//   console.log(i);

//   if (i >= 12) {
//     break;
//   }

//   i++;
// }
//  while (i < 100);

console.warn(
  '7. Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32. ',
);
// let i = 7;
// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// } while (i < 32);

console.warn(
  `8.Folosind metoda prompt de trei ori cere utilizatorului un numar,
   o limita inferioara si o limita superioara
   apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
  `,
);

const number = prompt('introdu nr:');
const minLimit = prompt('introdu limita inferioara:');
const maxLimit = prompt('introdu limita superioara:');

let i = minLimit;
do {
  if (i % number === 0) {
    console.log(i);
  }

  i++;
} while (i <= maxLimit);
