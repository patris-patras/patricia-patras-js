var referenceNumber = prompt('Introdu un nr:');

for (let i = 0; i <= 100; i++) {
  console.log(i);

  if (i % referenceNumber !== 0) {
    continue;
  }

  console.log(`Acest numar e multiplu de ${referenceNumber}.`);
}
