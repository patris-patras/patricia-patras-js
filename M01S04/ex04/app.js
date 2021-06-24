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

for (i = 0; i <100; i++) {
  if (i % 5 !== 0) {
    continue;
  }

  console.log(i);
}
