const box = document.querySelector('.box');
const controls = document.querySelectorAll('.controls').item(0);

const colorInput = document.querySelector('.color-input');
const changeColorButton = document.querySelector('.change-color-button');
const resetColorButton = document.querySelector('.reset-button');

// event delegation - vreau doar o functie nu 3
controls.addEventListener('click', (event) => {
  console.log(event.target); // elem de pe care a plecat eventul/pe ce am dat click, (target ptr ca in unele cazuri pleaca si se intoarce pe elem targetat
  console.log(event.currentTarget); // e controls - elem pe care am rulat addEventListener

  const target = event.target;

  if (target.nodeName !== 'BUTTON' || target.value.length < 1) {
    // early return
    return;
  }

  const buttonElement = target;
  const colorValue = buttonElement.value;

  box.style.backgroundColor = colorValue;
});

colorInput.addEventListener('input', () => {
  const colorValue = colorInput.value;

  if (colorInput.value.length > 0) {
    changeColorButton.style.backgroundColor = colorValue;
  }

  changeColorButton.addEventListener('click', () => {
    box.style.backgroundColor = colorValue;
  });
});

resetColorButton.addEventListener('click', () => {
  // colorInput.value = '';
  // changeColorButton.style.backgroundColor = '';

  colorInput.removeAttribute(`style`);
  changeColorButton.removeAttribute(`style`);
});

// resetButton sa apara doar dupa ce e input

//  HELP - nu imi iese asta cu removeAttribute.. nu imi dau seama cum trebuie scris
