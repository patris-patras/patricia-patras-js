$(() => {
  $(document.body).append(
    $('<p>', {
      text: 'Acesta e un msj de eroare.',
    })
      .addClass('error')
      .prepend(
        $('<sup>', {
          text: 1,
        }),
      ),
  );
});
