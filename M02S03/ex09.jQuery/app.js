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
      $ul.show();
    } else {
      $h1.off('click', clickHandler);
      $ul.hide();
    }
  });
});
