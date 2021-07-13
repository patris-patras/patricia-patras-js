const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';

if (userAgentString.toLowerCase().includes('chrome')) {
  message = 'Navighezi folosind Chrome.';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
  const userName = prompt('Cum te cheama?');
  const headingElement = document.createElement('h1');
  const message = `Salut ${userName}!`;

  headingElement.innerText = message;

  document.body.append(headingElement);

  setTimeout(() => {
    paragraphElement.remove();
  }, 3000);
}, 3000);
