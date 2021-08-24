let person1 = {
  name: 'Steven',
  surname: 'Stevenson',
};

let person2 = {
  name: 'Rolf',
  surname: 'Rolfson',
};

let person3 = {
  name: 'Andra',
  surname: 'Andrason',
};

let age1 = {
  age: 20,
};

let age2 = {
  age: 25,
};

// In fisierul app.js Andra are trebui sa aiba 25 de ani, Steven 20 iar Rolf 40,
// folosind operatorul spread, creaza obiecte de tipul fullPerson1, fullPerson2, si fullPerson3 care sa reflecte acest lucru
const fullPerson1 = {
  ...person1,
  ...age1,
};

const fullPerson2 = {
  ...person2,
  age: 40, // pentru ca la asta nu am un obiect age cu care sa il concatenez
};

const fullPerson3 = {
  ...person3,
  ...age2,
};

console.log(fullPerson1, fullPerson2, fullPerson3);
console.table(fullPerson1);

// Folosind noul obiect fullPerson3 creaza intr-un obiect numit fullPerson4
// cu numele de familie al Andrei care sa se numeasca Anita si sa aiba 36 de ani.
const fullPerson4 = {
  ...fullPerson3,
  name: 'Anita', // suprascriem
  age: 36,
};
console.log(fullPerson3, fullPerson4);

// improv
const calculateSurface = (...args) => {
  const length = args.length;

  if (length === 2) {
    return args[0] * args[1];
  }

  if (length === 1) {
    return args[0] ** 2;
  }
};

const square = calculateSurface(2);
const rectangle = calculateSurface(2, 6);

console.log(square, rectangle);
