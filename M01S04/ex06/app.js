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
      surname: 'Larryson',
      age: 29,
    },
  ],
};

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului',
);

for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

const skillsLength = person.skills.length;
console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');
for (let i = 0; i < skillsLength; i++) {
  const skillName = person.skills[i];

  if (skillName[0] !== 'j') {
    console.log(skillName);
  }
}

console.warn('Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."');

const friendsLength = person.friends.length;
// v1
let message = 'Prietenii mei se numesc ';
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  let punctuation = ', ';
  //friend.name === person.friends[i].name

  message += `${friend.name} ${friend.surname}`;

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  message += punctuation;
}
console.log(message);

// v2
message = 'Prietenii mei se numesc ';
for (let i = 0; i < friendsLength; i++) {
  const { name, surname } = person.friends[i];
  // friend.name friend.age friend.surname
  // name = friend.name
  // surname = friend.surname
  let punctuation = ', ';

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  message = `${message}${name} ${surname}${punctuation}`;
}
console.log(message);

console.warn(
  'Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani',
);

let totalYears = 0;
// v1
for (let i = 0; i < friendsLength; i++) {
  if (person.friends[i].age >= 30) {
    totalYears += person.friends[i].age;
  }
}
console.log(totalYears);

//v2
totalYears = 0;
for (let i = 0; i < friendsLength; i++) {
  const { age } = person.friends[i];
  // asta e ss pentru: age = person.friends[i].age;
  totalYears += age >= 30 ? age : 0;
}
console.log(totalYears);

console.warn('Folosind un for, afiseaza suma anilor de nastere a persoanelor');
let sumBirthYears = 0;
for (let i = 0; i < friendsLength; i++) {
  sumBirthYears += 2021 - person.friends[i].age;
}
console.log(sumBirthYears);
