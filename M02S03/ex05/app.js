const showMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  document.body.append(p);
};
let initialWidth = window.innerWidth;

showMessage(`Latimea ferestrei este: ${initialWidth}`);

const debouncedResize = debounce(() => {
  const currentWidth = window.innerWidth;
  showMessage(`Latimea ferestrei este: ${currentWidth}`);

  if (currentWidth !== initialWidth) {
    showMessage(`Fereastra si-a schimbat latimea`);
  }

  initialWidth = currentWidth;
}, 200);

window.addEventListener('resize', debouncedResize);

// !!!!  REPARA ODATA CONSOLA !!!!!
