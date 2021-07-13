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
skillsKeys.forEach(function (skillKey) {
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
