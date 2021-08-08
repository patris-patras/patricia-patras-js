const paragraphClass = 'message-paragraph';

const createElement = (elementType = 'p', cssClass = '') => {
  const element = document.createElement(elementType);
  element.classList.add(cssClass);

  return element;
};

const showMessage = (message) => {
  // verific daca para e acolo
  // dca este, scriem in el
  // dca nu, il creeam si apoi scriem

  let p = document.querySelector(`.${paragraphClass}`);
  if (p === null) {
    p = createElement('p', paragraphClass);

    document.body.append(p);
  }

  p.innerText = message;
}; // suprascriem paragrapful asa

const imageElement = document.querySelector('img.image');
const imageLink = imageElement.getAttribute('src');

imageElement.addEventListener('loadstart', () => {
  showMessage('Imaginea se incarca...');
});
// HELP
// Nu reusesc sa afisez asta ^. loadstart merge doar la audio/video banui...

imageElement.addEventListener('load', () => {
  showMessage('Imaginea s-a incarcat');
});

imageElement.addEventListener('click', () => {
  alert(`Imaginea cu URLul: ${imageLink} s-a incarcat.`);
});
