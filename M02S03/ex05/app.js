const showMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  document.body.append(p);
};

let initialWidth = window.innerWidth;

showMessage(`Latime fereastra: ${initialWidth}`);

const debounceResize = debounce(() => {
  const currentWidth = window.innerWidth;
  showMessage(`Latime fereastra: ${currentWidth}`);

  if (currentWidth !== initialWidth) {
    showMessage(`Fereastra si-a schimbat latimea`);
  }

  initialWidth = currentWidth; // ca sa o intoarca mereu la dimens actuala, ca sa poata sa o comapre
});

window.addEventListener('resize', debounceResize);

// window.addEventListener('resize', () => {
//   const currentWidth = window.innerWidth;
//   showMessage(`Latime fereastra: ${currentWidth}`);

//   if (currentWidth !== initialWidth) {
//     showMessage(`Fereastra si-a schimbat latimea`);
//   }

//   initialWidth = currentWidth; // ca sa o intoarca mereu la dimens actuala, ca sa poata sa o comapre
// });

// baga de pe laptop npm package de debouncing
// https://www.npmjs.com/package/debounce
// npm init - y
// npm i debounce

// !!!! SAU REPARA ODATA CONSOLA !!!!!
