const person = {
  getName: function () {
    return 'Patris Patras';
  },

  getAge: function () {
    return 32;
  },
};

console.warn('Afiseaza primul nume al persoanei folosind metoda getName()');
// v1
const fullName = person.getName();
let firstName = fullName.split(' ')[0];
// transform textul in array cu .split
console.log(firstName);

// v2
let stringIndex = fullName.indexOf(' ');
firstName = fullName.slice(0, stringIndex);
console.log(firstName);

// .IndexOf('); imi spune pe ce pozitie gaseste spatiul ala
// si apoi ai .slice( , )

console.warn(
  'Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.',
);
