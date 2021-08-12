$(function () {
  const $h1 = $('h1');
  const $ul = $('ul');
  const $width = $(window).width();

  function clickHandler() {
    $ul.toggle();
  }

  if ($width <= 500) {
    $h1.on('click', clickHandler);
  }

  window.on('resize', () => {
    const $width = $(window).width();

    if ($width <= 500) {
      $h1.on('click', clickHandler);
      $ul.css('display', 'block');
    } else {
      $h1.off('click', clickHandler);
      $ul.css('display', 'none');
    }
  });
});

// HELP again!vec imi scapa?

// si am eroarea asta in consola si nu inteleg ce $ e not defined:
// app.js:1 Uncaught ReferenceError: $ is not defined
//     at app.js:1
