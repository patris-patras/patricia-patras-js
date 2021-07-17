const person = {
  name: 'Patris',
  surname: 'Patras',
  age: 32,
  petOwner: true,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      age: 29,
      surname: 'Carolson',
    },
  },
};

const skillsKeys = Object.keys(person.skills);
const friendsKeys = Object.keys(person.friends);

console.warn(
  'Folosind propozitii de forma: “person.name cunoaste: html.” “person.name cunoaste: javaScript.”',
);

Object.keys(person.skills).forEach(function (skillKey) {
  const personKnows = person.skills[skillKey];

  if (personKnows === true) {
    console.log(`${person.name} cunoaste: ${skillKey}.`);
  }
});

console.warn(
  'Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor.',
);
friendsKeys
  .slice() // copy
  .reverse() // reverse the copy + loop through the copy
  .forEach(function (friendKey) {
    const { surname, name } = person.friends[friendKey];

    console.log(`${surname} ${name}`);
  });

console.warn(
  'Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()',
);
let message = '“Prietenii mei sunt ';
friendsKeys.forEach(function (friendKey, i) {
  const { name } = person.friends[friendKey];
  const friendsLength = friendsKeys.length;
  let punctuation = ', ';

  if (i === friendsLength - 1) {
    punctuation = '.';
  } else if (i === friendsLength - 2) {
    punctuation = ' si ';
  }

  message += name + punctuation;
});
console.log(message);

console.warn(
  `4.Folosind bucla, afiseaza mai multe propozitii (cate una per console.log())
  care sa afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…`,
);

friendsKeys.forEach((friendKey) => {
  const { name, age } = person.friends[friendKey];
  const ageDiff = Math.abs(person.age - age);

  console.log(
    `Diferenta de varsta intre ${name} si ${person.name} este de ${ageDiff}.`,
  );
});

console.warn(
  `5.Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills`,
);
skillsKeys.forEach((skillKey) => {
  console.log(skillKey);
});

console.warn(
  `Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor. `,
);
friendsKeys.forEach((friendsKey) => {
  const friendName = person.friends[friendsKey].name;
  const friendSurname = person.friends[friendsKey].surname;

  console.log(friendName + ' ' + friendSurname);
});

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()`,
);

message = 'Prietenii mei sunt ';
friendsKeys.forEach((friendKey, i) => {
  const { name, surname } = person.friends[friendKey];
  const friendsLength = friendsKeys.length;
  let punctuation = ', ';

  if (i === friendsLength - 1) {
    punctuation = '.';
  } else if (i === friendsLength - 2) {
    punctuation = ' si ';
  }

  message += name + ' ' + surname + punctuation;
});
console.log(message);

console.warn(
  `Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze:
   “Larry are xx ani. Steven are....`,
);

friendsKeys.forEach((friendKey) => {
  const { name, age } = person.friends[friendKey];

  console.log(`${name} are ${age} ani.`);
});

// so m-am chinuit un pic aici ca este lectia la care mi-am distrus prezenta perfecta de la inceputul intregului path :(
// nu intelegeam ca skills si friends nu sunt array... am inteles intr-un final si apoi am putut face exercitiile :D
