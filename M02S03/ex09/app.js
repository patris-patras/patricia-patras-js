document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  let eventBound = false;
  const h1 = document.querySelector('h1');
  const ul = h1.nextElementSibling; // $ceva.next() ar fi fost in jQ

  const clickHandler = () => {
    switch (ul.style.display) {
      case 'none':
        ul.style.display = 'block';
        break;
      case 'block':
        ul.style.display = 'none';
        break;
    }
  };

  // verifici latime pag
  if (width <= 500) {
    // dc pag < 500px ->
    // atasam event pe h1
    h1.addEventListener('click', clickHandler);

    // ascundem ul
    ul.style.display = 'none';
    // setam eventBound true
    eventBound = true;
  }

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width <= 500) {
      if (eventBound === true) {
        return;
      } // ca sa nu risti sa repete elementul de fiecare data cand se schimba dimens wind cand e sub 500px

      h1.addEventListener('click', clickHandler);
      ul.style.display = 'none';
      eventBound = true;
    } else {
      h1.removeEventListener('click', clickHandler);
      ul.style.display = 'block';
      eventBound = false;
    }
  });
});
