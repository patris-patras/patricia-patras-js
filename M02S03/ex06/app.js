const button = document.querySelector('.btn');
const loRes = document.querySelector('.lo-res');
const midRes = document.querySelector('.mid-res');
const hiRes = document.querySelector('.high-res');

const showMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  return p;
};

const clickHandler = () => {
  const windowWidth = window.innerWidth;
  const p = showMessage('Butonul a fost apasat in aceasta rezolutie.');

  if (windowWidth < 650) {
    loRes.append(p);
  }

  if (windowWidth >= 650 && windowWidth < 1000) {
    midRes.append(p);
  }

  if (windowWidth >= 1000) {
    hiRes.append(p);
  }
};

button.addEventListener('click', clickHandler);
