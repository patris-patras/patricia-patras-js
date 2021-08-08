const box = document.querySelector('.box');
const darkenButton = document.querySelector('.darken-button');
const applyButton = document.getElementsByClassName('apply-button')[0]; // vezi html collection
const animationClass = 'animate-class';

setTimeout(() => {
  box.classList.toggle(animationClass);

  // callback hell
  setTimeout(() => {
    box.classList.toggle(animationClass);
  }, 2000);
}, 2000);
// setTimeout e asincron

//pt 5
// applyButton.addEventListener('click', () => {
//   if (box.classList.contains(animationClass)) {
//     box.classList.remove(animationClass);
//   } else {
//     box.classList.add(animationClass);
//   }
// });

// ptr 6 adaug event
// event.currentTarget.innerText sau textContent (mai nou)
applyButton.addEventListener('click', (event) => {
  const buttonElement = event.currentTarget;

  if (box.classList.contains(animationClass)) {
    box.classList.toggle(animationClass);
    buttonElement.textContent = 'Elimina';
  } else {
    box.classList.toggle(animationClass);
    buttonElement.textContent = 'Aplica';
  }
});

// Adauga alt buton cu textul “Intuneca”,
// care atunci cand este apasat nu va aplica o clasa,
// ci va aplica direct valoarea #000 pentru background-color, folosind /setAttribute
darkenButton.addEventListener('click', () => {
  // box.style.backgroundColor = '#000';

  box.setAttribute('style', 'background-color: #000;');
});

// home 7 + 8
