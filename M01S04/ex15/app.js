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

let friendsLength = person.friends.length;

for (let i = 0; i < friendsLength; i++) {
  for (let j = 0; j < friendsLength; j++) {
    if (i !== j) {
      const ageDiff = Math.abs(person.friends[i].age - person.friends[j].age);
      console.log(
        `Intre ${person.friends[i].name} si ${person.friends[j].name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}

// for (let i = 0; i < friendsLength; i++) {
//   const friend = person.friends[i];
//   const ageDiff = Math.abs(friend.age - person.age);

//   console.log(
//     `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.`,
//   );
// }

// Intre friend1  si friend2 este o diferenta de x ani.
