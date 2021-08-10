const heroElement = document.querySelector('.hero');
const hero = {
  left: 45,
  top: 120,
  element: heroElement,
  width: heroElement.offsetWidth,
  height: heroElement.offsetHeight,
};
hero.element.style.transform = generateTransformValue(hero); // ca sa il mut in pozitia noua in centru

const increments = 15;
const controls = document.querySelector('.controls');
const stage = document.querySelector('.stage');
const stageDimensions = {
  width: stage.offsetWidth,
  height: stage.offsetHeight,
};
const orthogonal = {
  x: 'left',
  y: 'top',
};
const speed = {
  forward: increments,
  back: -increments,
};

controls.addEventListener('click', (event) => {
  const target = event.target;

  if (target.nodeName !== 'BUTTON') {
    return;
  } // daca nu e buton, eventul poate sa mearga mai departe sa caute

  const button = target;
  const axis = button.dataset.axis;
  const direction = button.dataset.direction;
  const heroDirection = orthogonal[axis];

  hero[heroDirection] = hero[heroDirection] + speed[direction];
  validatePosition(hero);

  hero.element.style.transform = generateTransformValue(hero);
});

// transform: translate(x/x, y/x)

// ! functions with function keyword get hoised
function generateTransformValue(character) {
  return `translate(${character.left}px, ${character.top}px)`;
}

function validatePosition(character) {
  if (character.left <= 0) {
    character.left = 0;
  }

  if (character.left + character.width >= stageDimensions.width) {
    character.left = stageDimensions.width - character.width;
  }
}
