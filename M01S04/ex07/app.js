const friends = [
  {
    name: 'Patris',
    surname: 'Patras',
    friends: {},
  },
  {
    name: 'Larry',
    surname: 'Larryson',
    friends: {},
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
    friends: {},
  },
  {
    name: 'Carol',
    surname: 'Carolson',
    friends: {},
  },
  {
    name: 'Andra',
    surname: 'Andrason',
    friends: {},
  },
];

console.warn(
  'Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.',
);

const friendsLength = friends.length;

for (let i = 0; i < friendsLength; i++) {
  const { surname } = friends[i];
  // adica const surname = friends[i].surname
  // e acelasi lucru, doar sin sugar
  console.log(surname);
}

console.warn(
  'Afiseaza numele complet inversat al tuturor prietenilor, insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.',
);
for (let i = 0; i < friendsLength; i++) {
  const { surname, name } = friends[i];
  //inseamna const name = friends[i].name

  if (name.toLocaleLowerCase() === 'steven') {
    console.log(`M-am oprit la ${surname} ${name}.`);

    break;
  }

  console.log(`${surname} ${name}`);
}

console.warn(
  `Folosind keywordul continue, afiseaza numele complet inversat al prietenilor,
   doar daca numarul de caractere total al numelor lor este mai mare de 13
   sub forma de propozitii
  “Prenume Nume are mai mult de 13 caractere.'`,
);

for (let i = 0; i < friendsLength; i++) {
  const friend = friends[i];
  const surname = friend.surname;
  const name = friend.name;
  const fullNameLength = surname.length + name.length;
  //   mai sus am scris'o asa: const { surname, name } = friends[i];

  if (fullNameLength <= 13) {
    continue;
  }

  console.log(`${surname} ${name} are mai mult de 13 caractere.`);
}
