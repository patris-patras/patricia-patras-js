// echivalentul lui DOMContentLoaded pe jQ

$(() => {
  const message1Class = 'message1';
  const message2Class = 'message2';
  const message3Class = 'message3';

  //facem para ca nu este
  let $paragraph1 = $(`.${message1Class}`);
  let $paragraph2 = $(`.${message2Class}`);
  let $paragraph3 = $(`.${message3Class}`);

  let onStageCounter = 0;
  let sidesCounter = 0;

  const $stage = $('.stage')
    .on('mouseover', function () {
      if ($paragraph1.length < 1) {
        //daca nu E in DOM il creez, daca E, direct scrie in el
        $paragraph1 = $('<p>', {
          class: message1Class,
        }).insertAfter($stage);
      }

      if ($paragraph2.length < 1) {
        $paragraph2 = $('<p>', {
          class: message2Class,
        }).insertAfter($paragraph1);
      }

      if ($paragraph3.length < 1) {
        $paragraph3 = $('<p>', {
          class: message3Class,
        }).insertAfter($paragraph2);
      }

      onStageCounter++;
      sidesCounter++;

      $paragraph1.text('Mouse e pe scena');
      $paragraph2.text(`Mouse a fost pe scena de ${onStageCounter}`);
      $paragraph3.text(
        `Mouse a trecut peste laturile patratului de ${sidesCounter}`,
      );
    })
    .on('mouseout', function () {
      sidesCounter++;

      $paragraph1.text('Mouse nu e pe scena');
      $paragraph3.text(
        `Mouse a trecut peste laturile patratului de ${sidesCounter}`,
      );
    });
});
