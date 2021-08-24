let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
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

//  1.Folosind destructurarea salveaza primul si ultimul skill in variabile numite skill1 si skill3,
// apoi folosind aceaste variabile, afiseaza intr-un paragraf propozitia: “Cunosc html si css.”.
const [skill1, , skill3] = person.skills;
/** echivalent:
 * skill1 = person.skills[0];
 * skill3 = person.skills[2];
 */
console.log(`Cunosc ${skill1} & ${skill3}`);

// 2.Intr-un mod similar destructureaza arrayul friends pentru a obtine obiectul de pe pozitia 1
// apoi destructureaza obiectul obtinut in variabilele friend2Name, friend2Surname si friend2Age
// astfel incat sa le poti folosi in propozitia: Ma numesc Steven Stevenson si am 31 de ani.
const [, friend2] = person.friends;
// echivalent: friend2 = person.friends[1];
const { name: friend2Name, surname: friend2Surname, age: friend2Age } = friend2; // "scoatem proprietatea age ca friend2Age"

let message = `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} ani.`;
console.log(message);

// V2
const [, , { name: friend3Name, surname: friend3Surname }] = person.friends; // adica unde am var, in loc de ea pun variabila.proprietate
console.log(`Prietena mea este ${friend3Name} ${friend3Surname}`);

// 3.Destructureaza obiectul person pentru a obtine o variabila hasPet
// si in functie de aceasta afiseaza propozitia: “Persoana are/nu are animale”
const { petOwner: hasPet } = person;
console.log(`Persoana ${hasPet === true ? 'are' : 'nu are'} animale.`);

// 4.Destructureaza arrayul friends si obiectele de pe pozitia 0 si 2, astfel incat sa poti afisa propozitiile:
// “Prietenul meu este Larry Larryson”
// “Carol Carolson este prietena mea”. done :))^^^

const [f0, , { name: f2Name, surname: f2Surname }] = person.friends;
const { name: f0Name, surname: f0Surname } = f0;
console.log(`Prietenul meu este ${f0Name} ${f0Surname}.`);
console.log(`${f2Name} ${f2Surname} este prietena mea.`);
