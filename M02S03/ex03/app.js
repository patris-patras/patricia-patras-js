const fragment = new DocumentFragment();
let counter = 0;

// creare elem p
const p = document.createElement('p');
fragment.append(p);

// creare elem de counter
const counterElement = document.createElement('p');
// document.body.append(p);
// fragment de DOM - in loc de document.body
// deci le fac/appendui undeva in memorie intai si apoi le incarca in DOM (BP); altfel merge de fiecare data in DOm si face operatiuni costisitoare
fragment.append(counterElement);

document.body.append(fragment);

// add event listeners

const stage = document.querySelector('.stage');

stage.addEventListener('mouseover', () => {
  p.innerText = 'Mouse intra pe scena';

  counter++;
  counterElement.innerText = `Mouse a fost pe scena de ${counter} ori.`;
});

stage.addEventListener('mouseout', () => {
  p.innerText = 'Mouse iese de pe scena';
});

// daca faci toate astea in markup [sa creezi elem adica] ii afectezi structura...
// vezi guessing game - counter pentru logica
