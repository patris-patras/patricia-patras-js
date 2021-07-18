// const calculateSurface = function (L, l, h) {
//   if (arguments.length === 2) {
//     return L * l;
//   } else if (arguments.length === 3) {
//     return L * l * h
//   } else {
//     return L ** 2;
//   }
// };

console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
 Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`);
const calculateSurface = function (L, l, h) {
  switch (arguments.length) {
    case 1:
      return L ** 2;

    case 2:
      return L * l;

    case 3:
      return 2 * ((L + l) * h + L * l);
  }
};

console.log(calculateSurface(6, 7));
console.log(calculateSurface(4));
console.log(calculateSurface(20, 15, 5));

console.warn(
  'Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.',
);

// const pi = 3.14159265359;
const pi = Math.PI;
const calculateCircleArea = function (r) {
  return pi * r ** 2;
};

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

// supraf e pi * r ** 2

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode:
getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia:
“nnnn este ssss si are aaaa ani.”
`);

const pet = {
  getName: function () {
    return 'Gri';
  },
  getSpecies: function () {
    return 'bishishica';
  },
  getAge: function () {
    return 8;
  },
};

function accessor(methodSuffix) {
  const methodName = 'get' + methodSuffix;

  return pet[methodName]();
}

console.log(
  `${accessor('Name')} este ${accessor('Species')} si are ${accessor(
    'Age',
  )} ani.`,
);

console.warn(`Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge
varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);

const petAge = accessor('Age');
console.log(`Animalul meu are ${petAge} ani.`);
