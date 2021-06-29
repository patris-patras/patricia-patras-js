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

while (i < 100) {
  console.log(i);

  if (i >= 50) {
    break;
  }

  i++;
}
