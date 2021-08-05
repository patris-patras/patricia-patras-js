const box = document.querySelector('.box');
const applyButton = document.getElementsByClassName('apply-button')[0]; // vezi html collection
const animationClass = 'animate-class';

setTimeout(() => {
  box.classList.add(animationClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animationClass);
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
    box.classList.remove(animationClass);
    buttonElement.textContent = 'Elimina';
  } else {
    box.classList.add(animationClass);
    buttonElement.textContent = 'Aplica';
  }
});

// home 7 + 8
