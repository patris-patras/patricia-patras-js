const clickerButton = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove');
const clickHandler = function () {
  alert('Ai apasat butonul!');
};

// clickerButton.addEventListener('click', function () {});
clickerButton.addEventListener('click', clickHandler);

removeEventButton.addEventListener('click', function () {
  clickerButton.removeEventListener('click', clickHandler);
});

// 1.Folosind codul de la exercitiul 08,
// numeste functia care ruleaza la click clickHandler si
// foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime.

// 2.Adauga un buton pe care scrie Elimina Evenimentul.

// 3.La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button
// si foloseste numele clickHandler ca parametru

const queryButton = document.getElementById('query');
const paragraphElement = document.getElementById('message');
queryButton.addEventListener('click', function () {
  const age = prompt('Introdu varsta');
  const message = `Ai ${age} ani.`;

  console.log(message);
  paragraphElement.innerText = message;
});

// 4.Adauga un buton nou in document cu id-ul query si folosind addEventListener()
// ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.

// 5.Salveaza rezultatul metodei prompt intr-o variabila si
// afiseaza in consola folosind template strings: “Ai aa ani.”.

// 6.Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila,
// apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.
