var i = 0;

// for (i = 0; i < 100; i++) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }

//  if (i > 2) {}

// for (i = 0; i < 100; i++) {
//   if (i <= 50) {
//     console.log(i);
//   }
// }

// for (i = 0; i < 100; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

//Modifica exemplul astfel incat bucla sa numere de la 1 la 89.
//Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .
//Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.

// for (i = 1; i < 89; i++) {
//   if (i === 42) {
//     break;
//   }
//   console.log(i);
// }

//Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.
// for (i = 1; i <= 89; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

//afiseaza doar numerele care sunt divizibile cu 3
for (i = 1; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i);
}
