const person = {
  name: 'Patris',
  surname: 'Patras',
  age: 32,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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

// cerinte in bold sunt facute live

console.warn(
  `3.Folosind forEach afiseaza propozitia:
  "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy`,
);

let sentence = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, i, friends) {
  let punctuation = ', ';
  const { name, surname } = friend;
  const friendsLength = friends.length;
  // const name = friend.name

  if (i === friendsLength - 2) {
    punctuation = ' si ';
  }

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  sentence += `${name} ${surname}${punctuation}`;
});
console.log(sentence);

console.warn(
  `7.Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
  Intre Dragos si Steven...`,
);
