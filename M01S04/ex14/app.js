var person = {
  firstName: 'Patris',
  lastName: 'Patras',
  birthYear: 1989,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

const petsLength = person.pets.length;
// Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
person.pets.forEach((pet) => {
  console.log(pet.name);
});

// Folosind o bucla for afiseaza suma anilor animalelor.

let totalPetsAge = 0;
for (let i = 0; i <= petsLength - 1; i++) {
  const petAge = person.pets[i].age;
  totalPetsAge += petAge;
}

console.log(totalPetsAge);

// Folosind forEach() afiseaza, cate una pe linie, propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.

person.pets.forEach(function (pet) {
  const { name, species, age } = pet;

  console.log(`${name} este ${species} si are ${age} ani.`);
});

// Folosind o bucla for afiseaza cate una pe linie propozitiile:
// “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).

for (let i = 0; i <= petsLength - 1; i++) {
  const petName = person.pets[i].name;
  const petsAge = person.pets[i].age;
  const personAge = 2021 - person.birthYear;
  const ageDiff = personAge - petsAge;

  console.log(
    `Intre ${person.firstName} si ${petName} este o diferenta de ${ageDiff} ani.`,
  );
}

// Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii:
//  “Animalul meu se numeste xxxx.”.

let message = 'Animalul meu se numeste ';
for (let i = petsLength - 1; i >= 0; i--) {
  // const punctuation = '.';
  const petName = person.pets[i].name;

  console.log(message + petName);
}

// Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
//  “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”

let eldestPetName = '';
let ageDiff = 0;
let maxAge = 0;
const personAge = 2021 - person.birthYear;

for (let i = 0; i <= petsLength - 1; i++) {
  if (maxAge < person.pets[i].age) {
    maxAge = person.pets[i].age;
    eldestPetName = person.pets[i].name;
  }
}
ageDiff = personAge - maxAge;
console.log(
  `${eldestPetName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

// Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.

message = 'Am ';
person.pets.forEach((pet, i) => {
  const petSpecies = pet.species;
  let punctuation = ', ';

  if (i === petsLength - 1) {
    punctuation = '.';
  } else if (i === petsLength - 2) {
    punctuation = ' si ';
  }

  message += petSpecies + punctuation;
});
console.log(message);
