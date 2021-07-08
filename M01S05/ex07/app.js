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
