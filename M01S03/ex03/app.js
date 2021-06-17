var person = {
  name: 'Patris',
  surname: 'Patras',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

steven.friends.larry = larry;
larry.friends.steven = steven;
andra.friends.steven = steven;
steven.friends.andra = andra;

carol.friends.andra = andra;
andra.friends.carol = carol;

delete person.friends.larry;
delete larry.friends.person;

console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);

// v1
console.log(
  (
    andra.friends.person.name.length + andra.friends.person.surname.length
  ).toString(),
);

// v2
console.log((andra.friends.person.name + andra.friends.person.surname).length);
