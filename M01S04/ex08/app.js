let i = 0;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 100');

console.warn('Ce se intampla daca i este initializat cu valoarea 101?');
// i = 101;
// while (i <= 100) {
//   console.log(i);

//   i++;
// }

console.warn(
  'Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100)',
);

// while (i < 100) {
//   console.log(i);

//   i++;
// }

console.warn(
  '4.Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).',
);

// while (i < 100) {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }

//   i++;
// }

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 67');
console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 66');

console.log(i);

// while (i < 100) {
//   console.log(i);

//   if (i >= 66) {
//     break;
//   }

//   i++;
// }

console.warn(
  `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).`,
);
// console.log(i);

// while (i < 100) {
//   console.log(i);

//   if (i >= 12) {
//     break;
//   }

//   i++;
// }

console.warn(
  `Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).`,
);
// while (i <= 33) {
//   console.log(i);

//   if (i % 2 !== 0) {
//     continue;
//   }

//   i++;
// }

console.warn(`
Folosind metoda prompt de doua ori cere utilizatorului un numar
si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.`);

const number = prompt('Introdu nr:');
const maxLimit = prompt('Limita superioara:');

i = 5;

while (i < maxLimit) {
  if (i % number === 0) {
    console.log(i);
  }

  i++;
}
