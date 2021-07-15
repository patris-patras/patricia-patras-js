// (function () {
//   document.addEventListener('DOMContentLoaded', function () {
//     const showButton = document.querySelector('#showButton');
//     const toggleEventButton = document.querySelector('#toggleEventButton');
//     let eventBound = true;

//     const showAlert = () => {
//       alert('Butontul apasat');
//     };

//     showButton.addEventListener('click', showAlert); // doar numim fct ca sa o putem elim/reatasa pe btn; dar nu e invocata aici

//     toggleEventButton.addEventListener('click', (event) => {
//       if (eventBound === true) {
//         showButton.removeEventListener('click', showAlert);
//         event.target.innerText = 'Porneste afisarea';
//         eventBound = false;
//       } else {
//         showButton.addEventListener('click', showAlert);
//         event.target.innerText = 'Opreste afisarea';
//         eventBound = true;
//       }
//     });
//   });
// })();

// 2.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButtonsButton = document.querySelector('.remove_buttons');
    let eventBound = true;

    const showAlert = () => {
      alert('Butontul apasat');
    };

    const showDomMessage = (message) => {
      let paragraphElement = document.querySelector('.para');

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add('para');

        paragraphElement.innerText = message;

        document.body.append(paragraphElement);

        return;
      }

      paragraphElement.innerText = message;
    };

    showButton.addEventListener('click', showAlert); // doar numim fct ca sa o putem elim/reatasa pe btn; dar nu e invocata aici
    showDomMessage('Alerta va fi afisata');

    toggleEventButton.addEventListener('click', (event) => {
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        event.target.innerText = 'Porneste afisarea';
        showDomMessage('Alerta nu va fi afisata');
        eventBound = false;
      } else {
        showButton.addEventListener('click', showAlert);
        event.target.innerText = 'Opreste afisarea';
        showDomMessage('Alerta va fi afisata');
        eventBound = true;
      }
    });

    removeButtonsButton.addEventListener('click', () => {
      if (confirm('Esti sigur?') === true) {
        showButton.remove();
        toggleEventButton.remove();
      }
    });
  });
})();

/* 3.Adauga un buton in document pe care cand apesi,
sunt eliminate celelate butoane cu metoda .remove()
add:

const removeButtonsButton = document.querySelector('.remove_buttons');

    removeButtonsButton.addEventListener('click', () => {
      showButton.remove();
      toggleEventButton.remove();
    });

*/

/* 4. add

    removeButtonsButton.addEventListener('click', () => {
      if (confirm('Esti sigur?') === true) {
        showButton.remove();
        toggleEventButton.remove();
      }

*/
