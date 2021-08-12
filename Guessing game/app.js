/* -->generez 1 nr random

-->verific nr introdus de user:
in functie de 2 conditii > / < decat nr meu

-->afisez msj in fct de rezul:
daca nu e nr -> msj notOk
daca e nr --> msj Ok

--> limitare nr de incercari
--> de adaugat reset/play again button

-->style si animatii/sunet -> bonus fun reward! dupa ce am functionalitate
*/

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessField = document.getElementById('guessField');
let submitButton = document.getElementById('submitButton');
const form = document.getElementById('guessForm');
let previousGuesses = document.getElementById('guesses');
let resultAssessment = document.getElementById('resultAssessment');
let guessesCount = document.getElementById('guessesCount');
let guessesNumber = 5;
guessesCount.innerText = `Tries left: ${guessesNumber}`;

form.addEventListener('submit', function (event) {
  let userGuess = Number(guessField.value);

  if (userGuess <= 0 || userGuess > 100) {
    alert(`Try a number between 1 and 100!`);
    guessField.value = '';
  } else {
    if (randomNumber === userGuess) {
      resultAssessment.innerText = `Yey you won`;
      endGame();
    } else {
      resultAssessment.innerText = `Nope!`;

      if (userGuess > randomNumber) {
        resultAssessment.innerText += ` Your guess is higher! Try again!`;
      } else {
        resultAssessment.innerText += ` Your guess is lower! Try again!`;
      }

      guessesNumber--;
      guessesCount.innerText = `Tries left: ${guessesNumber}.`;

      if (guessesNumber === 0) {
        guessesCount.innerText = `Tries left 0! You are dead`;
        endGame();
      }
    }

    previousGuesses.innerHTML += `${userGuess} `;

    guessField.value = '';
  }

  event.preventDefault();
});

function endGame() {
  submitButton.disabled = true;
  guessField.disabled = true;

  // fac button de playAgain
  const playAgainButton = document.createElement('button');
  playAgainButton.innerText = 'Play again!';
  playAgainButton.style.alignItems = 'center';
  // il pun doc
  document.body.append(playAgainButton);

  playAgainButton.addEventListener('click', function resetGame() {
    submitButton.disabled = false;
    guessField.disabled = false;

    guessField.value = '';
    previousGuesses.innerText = '';
    resultAssessment.innerText = '';
    guessesCount.innerText = '';

    guessesNumber = 5;

    randomNumber = Math.floor(Math.random() * 100) + 1;
  });
}

// nu nimeresc sintaxa sa alinieaz butonul:
// 70  playAgainButton.style.alignItems = 'center';
