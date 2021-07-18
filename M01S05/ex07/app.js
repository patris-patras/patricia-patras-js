const dateBuilder = [
  function () {
    return '2021';
  },
  function () {
    return 'Iulie';
  },
  function () {
    return '8';
  },
];

dateBuilder[3] = function () {
  return 'Joi';
};

console.warn('Afiseaza propozitia: “Suntem in anul an.');
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn('Afiseaza propozitia: “Suntem in luna ll in anul aa.');
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn('AAfiseaza propozitia: “Astazi este zz.”');
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

console.warn('Folosind arrayul dateBuilder. Afiseaza anul curent.');
console.log(dateBuilder[0]());

console.warn('Afiseaza propozitia: “Suntem in luna an.”.');
console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}.`);

console.warn('Afiseaza propozitia: “Astazi este zi, data.');
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

console.warn('Afiseaza propozitia: “Data curenta este zi luna an.”.');
console.log(
  `Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`,
);

console.warn('Astazi este Iulie.');
console.log(`Astazi este ${dateBuilder[1]()}.`);

// Pixeltab, ce vrea aici ?
// Cerinta este: Arrayul "dateBuilder" trebuie sa aiba 4 elemente, fiecare element sa fie o functie care returneaza un string.
// Elementul 0 din array nu este o functie care returneaza un string.
