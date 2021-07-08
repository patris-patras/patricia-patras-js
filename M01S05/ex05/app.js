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
  '2.Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.',
);
const currentYear = new Date().getFullYear();
const personAge = person.getAge();
const birthYear = currentYear - personAge;
console.log(currentYear - personAge);

console.warn(
  '3Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge().',
);
console.log(birthYear.toString().slice(-2));
