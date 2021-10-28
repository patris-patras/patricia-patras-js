const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
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
  // larry - 0, steven - 1, carol - 2
  // length 3
  // steven -> 3 - 2
  // carol -> 3 - 1
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

console.warn(
  ' 3.Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."',
);
let sentence = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, i, friends) {
  let punctuation = ', ';
  const { name, surname } = friend;
  const friendsLength = friends.length;
  // const name = friend.name

  if (i === friendsLength - 2) {
    punctuation = ', ';
  }

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  sentence += `${name} ${surname}${punctuation}`;
});
console.log(sentence);

console.warn(
  '7.Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "',
);
sentence = '';
person.friends.forEach(function ({ name, age }, i, friends) {
  // v2 const name = friend.name
  const ageDiff = Math.abs(person.age - age);
  sentence += `Intre ${
    person.name
  } si ${name} este o diferenta de ${ageDiff} ani.${
    i === friends.length - 1 ? '' : ' '
  }`;
});
console.log(sentence.trim());

console.warn(
  '8.Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.',
);
// reverse mutates
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });
// person.skill.reverse()

console.warn('10.In mod similar, afiseaza skillurile care nu incep cu j.');
//v1
person.skills.forEach(function (skill) {
  if (!skill.startsWith('j')) {
    console.log(skill);
  }
});
//v2
person.skills.forEach((skill) => {
  if (skill[0] === 'j') {
    return;
  }

  console.log(skill);
});

console.warn(
  '1.Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.',
);
person.skills.forEach(function (skill, i) {
  if (i % 2 !== 0) {
    console.log(skill);
  }
});

console.warn('2. In mod similar, afiseaza skillurile care contin litera a.');
// v1
person.skills.forEach((skill) => {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

// v2
person.skills.forEach((skill) => {
  if (skill.indexOf('a') !== -1) {
    console.log(skill);
  }
});

console.warn(`4. Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
doar daca au varsta mai mare decat 30 inclusiv.`);

let friendsTotalAge = 0;
person.friends.forEach(function ({ age }) {
  if (age >= 30) {
    friendsTotalAge += age;
  }
});
console.log(friendsTotalAge);

//  const friendsTotalAge = person.friends[].age
// console.log(friendsTotalAge);

console.warn(
  '5. Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara',
);
let totalBirthYears = 0;
let birthYear;
person.friends.forEach(function ({ age }) {
  birthYear = 2021 - age;

  if (age % 2 !== 0) {
    totalBirthYears += birthYear;
  }
});
console.log(totalBirthYears);

console.warn(`6.Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends
 daca aceasta este mai mare sau egala cu 2 ani`);

ageDiff = 0;
person.friends.forEach(function ({ age }) {
  ageDiff = Math.abs(person.age - age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(
  `9.Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana`,
);
person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(
  `11. Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);
sentence = 'Numele mari ale prietenilor mei sunt ';
punctuation = ', ';
friendsLength = person.friends.length;
person.friends.forEach(function ({ surname }, i) {
  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  sentence += surname + punctuation;
  // sentence += punctuation;
});
console.log(sentence);

console.warn(
  `12.Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`,
);
friendsTotalAge = 0;
person.friends.forEach(function ({ age }) {
  friendsTotalAge += age;
});
console.log(friendsTotalAge);

console.warn(
  `13. Folosind forEach, afiseaza suma anilor de nastere a persoanelor`,
);

totalBirthYears = 0;
birthYear = 0;
person.friends.forEach(function ({ age }) {
  birthYear = 2021 - age;

  totalBirthYears += birthYear;
});
console.log(totalBirthYears);

console.warn(
  `14. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);
let sumFriendsAge = 0;
person.friends.forEach(function ({ age }) {
  sumFriendsAge += age;
});
console.log(person.age - sumFriendsAge / person.friends.length);

// am facut average ca nu am inteles cerinta altfel.

console.warn(`Folosind metoda reverse si apoi forEach, afiseaza in ordine
inversa numele complet al prietenilor din arrayul friends`);

person.friends
  .slice()
  .reverse()
  .forEach(function ({ name, surname }) {
    console.log(`${name} ${surname}`);
  });
