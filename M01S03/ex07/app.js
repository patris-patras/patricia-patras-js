var person = {
  firstName: 'Patris',
  lastName: 'Patras',
  email: 'patris@jsmaster.org',
  birthYear: 1989,
  pets: [
    {
      name: 'BurtiGol LeMiau',
      species: 'maidanezImperial',
      age: 10,
    },
    {
      name: 'Rolf',
      species: 'lostSoul',
      age: 9,
    },
    {
      name: 'CarraMia',
      species: 'lostSoul',
      age: 3,
    },
  ],
  zipCode: '010101',
};

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”.',
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' si ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);
//nu il valideaza PixelTabu dar nu stiu de ce, e scris corect

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”');
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

//nu vrea nicio combinatie aici pixelTabu

console.warn(
  'Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.',
);
console.log(2021 - person.pets[2].age);

//PixelTab is dead inside....

console.warn(
  'Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent',
);
var difference = 2021 - person.birthYear - person.pets[0].age;
console.log(difference);

// idem

console.warn(
  'Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName',
);
let petName = person.pets[0].name;

console.warn(
  'Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.',
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn('creeaza o lista neordonata <ul> cu 5 elemente goale <li>.');
console.warn('Fiecare li sa aiba un id: prop01, prop02… etc');
console.warn(
  'Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person. (innerText)',
);

var prop1 = document.getElementById('prop01');

// Nu inteleg cerinta... e stupid dar pur si simplu nu inteleg ce tre sa fac

console.warn(
  'Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)',
);
console.log(
  person.firstName +
    ', ' +
    person.pets[0].name +
    ', ' +
    person.pets[1].name +
    ', ' +
    person.pets[2].name +
    ' locuiesc toti in aceeasi casa.',
);

console.warn(
  'Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 ',
);
var differencePets = person.pets[0].age - person.pets[2].age;
console.log(differencePets);

console.warn(
  '“Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”',
);
console.log(
  'Ma numesc ' +
    person.firstName +
    ' ' +
    person.lastName +
    ', ' +
    'm-am nascut in ' +
    person.birthYear +
    ' si codul meu postal este: ' +
    person.zipCode,
);

console.warn(
  '“Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent ',
);
console.log(
  'Animalele mele s-au nascut in ' +
    (2021 - person.pets[0].age) +
    ', ' +
    (2021 - person.pets[1].age) +
    ', respectiv ' +
    (2021 - person.pets[2].age) +
    '.',
);
