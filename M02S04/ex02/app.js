const box = document.querySelector('.box');
const controls = document.querySelectorAll('.controls').item(0);

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
