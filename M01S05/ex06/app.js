const person = {
  getName: function () {
    return 'Patris Patras';
  },
  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(`Folosind accesorul salveaza numele mic al persoanei intr-o variabila
si foloseste-l in propozitia: “Eu sunt xxx`);

const personName = accessor('Name');
// const personFirstName = personName.split(' ')[0];
console.log(`Eu sunt ${personName}.`);

console.warn(
  `Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.`,
);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${2021 - accessor('Age')}.`,
);

console.warn(`Folosind accesorul afiseaza numele persoanei.
Afiseaza varsta persoanei.
`);

console.log(accessor('Name'));
console.log(accessor('Age'));

// cerinta cere age, Pixeltab cere an nastere

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.
Intr-o propozitie de forma “M-am nascut in 1987.”`);

console.log(`M-am nascut in ${2021 - accessor('Age')}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
