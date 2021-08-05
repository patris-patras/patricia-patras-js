// echivalentul lui DOMContentLoaded pe jQ

$(() => {
  const message1Class = 'message1';
  //facem para ca nu este
  let $paragraph1 = $(`.${message1Class}`);

  const $stage = $('.stage')
    .on('mouseover', function () {
      if ($paragraph1.length < 1) {
        //daca nu E in DOM il creez, daca E, direct scrie in el
        $paragraph1 = $('<p>', {
          class: message1Class,
        }).insertAfter($stage);
      }

      $paragraph1.text('Mouse e pe scena');
    })
    .on('mouseout', function () {
      $paragraph1.text('Mouse nu e pe scena');
    });
});

// tema pt 3 + 4
