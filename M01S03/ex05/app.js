var person = {
  name: 'Patris',
  surname: 'Patras',
  age: 32,
  petOwner: true,
  skills: ['html', 'javascript', 'css'],
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

console.warn(
  '2.Afiseaza propozitia “Sunt xxx si acum invat JavaScript.” Nu folosi valoarea din arrayul de skills.',
);
console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.warn(
  '4.Ma numesc xxx yyy si vreau sa invat javascript.” Foloseste notatia cu paranteze patrate',
);
console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invat ' +
    person.skills[1] +
    '.',
);

console.warn(
  '5.Sunt xxx si stiu HTML si CSS.”. Nu folosi valoarea din arrayul de skills.',
);
console.log('Sunt ' + person.name + ' si stiu HTML si CSS.');

console.warn(
  '6.Am x prieteni: Larryson, Stevenson si Carolson.”. Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.',
);
console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].surname +
    ', ' +
    person.friends[1].surname +
    ' si ' +
    person.friends[2].surname +
    '.',
);

console.warn(
  '7.Numele meu este xxx yyy, am zz ani si n prieteni.”. Foloseste metoda length pentru a calcula lungimea arrayului de prieteni.',
);
console.log(
  'Numele meu este ' +
    person.name +
    ' ' +
    person.surname +
    ', am ' +
    person.age +
    ' ani si ' +
    person.friends.length +
    ' prieteni.',
);
