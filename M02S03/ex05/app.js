const showMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  document.body.append(p);
};

let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;
let windowSurface = initialWidth * initialHeight;

document.addEventListener('DOMContentLoaded', function () {
  showMessage(`Fereastra are suprafata initiala de ${windowSurface} pixeli.`);
});

showMessage(`Latimea ferestrei este: ${initialWidth}`);
showMessage(`Inaltimea ferestrei este: ${initialHeight}`);
showMessage(`Fereastra are acum suprafata de ${windowSurface} pixeli.`);

const debouncedResize = debounce(() => {
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;
  showMessage(`Latimea ferestrei este: ${currentWidth}`);
  showMessage(`Inaltimea ferestrei este: ${currentHeight}`);

  if (currentWidth !== initialWidth) {
    showMessage(`Fereastra si-a schimbat latimea`);
  }

  if (currentHeight !== initialHeight) {
    showMessage(`Fereastra si-a schimbat inaltimea`);
  }

  windowSurface = currentHeight * currentWidth;
  showMessage(`Fereastra are acum suprafata de ${windowSurface} pixeli.`);

  initialWidth = currentWidth;
  initialHeight = currentHeight;
}, 500);

window.addEventListener('resize', debouncedResize);

// Folosind evenimentul resize al obiectului window si proprietatile innerWidth si innerHeight,
//  la fiecare redimensionare a ferestrei, afiseaza intr-un paragraf
// mesajul: “Fereastra are acum suprafata de xxx pixeli.”.

// Folosind evenimentul de DOMContentLoaded
//si o functie reutilizabila afiseaza suprafata ferestrei
//si la momentul incarcarii site-ului.
