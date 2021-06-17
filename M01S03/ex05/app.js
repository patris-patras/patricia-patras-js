var person = {
  name: 'Patris',
  surname: 'Patras',
  age: 32,
  petOwner: true,
  skills: ['html', 'js', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// done live 1, 3

console.warn(
  '“Ma numesc xxx yyy si stiu html si css.” Foloseste notatia cu paranteze patrate',
);
console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.warn(
  'Am x prieteni: Larry, Steven si Carol.” Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor',
);
console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);

console.warn();
console.log();
