var referenceNumber = prompt('Introdu un nr:');
var incrementLimit = prompt('Limita superioara:');

for (let i = 0; i < incrementLimit; i++) {
  console.log(i);

  if (i % referenceNumber !== 0) {
    continue;
  }

  console.log(`Acest numar e multiplu de ${referenceNumber}.`);
}

//Folosind inca o metoda prompt, cere utilizatorului si limita superioara
//pana la care sa numere bucla si sa afiseze multipli.
