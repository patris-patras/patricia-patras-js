// SIAF:
// (() => {

// })();

// (() => {
// document.addEventListener('DOMContentLoaded', () => {

// });
// })();

// (() => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const stage = document.querySelector('.stage'); // unde vezi "selector" -> css

//     stage.addEventListener('mouseover', () => {
//       console.log('Mouse pe scena.');
//     });

//     stage.addEventListener('mouseout', () => {
//       console.log('Mouse nu e pe scena.');
//     });
//   });
// })(); //am facut o const -> stage si apoi i-am pus pe ea 2 events

// Folosind exemplul de la exercitiul 2,
// afiseaza mesajul intr-un paragraf in loc de consola.
//  Inainte de a adauga elementul in DOM adauga-i clasa message

// (() => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const stage = document.querySelector('.stage'); // unde vezi "selector" -> css
//     let paragraphElement = document.querySelector('.para');

//     if (paragraphElement === null) {
//       paragraphElement = document.createElement('p');
//       paragraphElement.classList.add('para'); // nu pun si pct pt ca nu am "selector"

//       document.body.append(paragraphElement); // acum il pun si in DOM
//     }

//     stage.addEventListener('mouseover', () => {
//       const message = 'Mouse e pe scena';
//       console.log(message);
//       paragraphElement.innerText = message;
//     });

//     stage.addEventListener('mouseout', () => {
//       console.log('Mouse nu e pe scena.');
//       paragraphElement.innerText = 'Mouse nu e pe scena.';
//     });
//   });
// })();

/* intai verif daca am un p si daca nu am, sa il creez;
asta o fac cu  if din line 35

! createElement('p') vine cu numele de elemente deja in variante

! innerText e prop, nu met
*/

// Creaza o functie numita showMessage()
// pe care sa o chemi de fiecare data cand vrei sa afisezi un paragraf in DOM

(() => {
  const showMessage = (message) => {
    const paragraphElement = document.createElement('p');

    paragraphElement.innerText = message; // aici o creez in memorie
    document.body.append(paragraphElement); // si acum o chem
  };

  document.addEventListener('DOMContentLoaded', () => {
    const stage = document.querySelector('.stage'); // unde vezi "selector" -> css

    stage.addEventListener('mouseover', () => {
      const message = 'Mouse e pe scena';

      showMessage(message);
    });

    stage.addEventListener('mouseout', () => {
      const message = 'Mouse nu e pe scena';

      showMessage(message);
    });
  });
})();

// append in fata lui appendChild
