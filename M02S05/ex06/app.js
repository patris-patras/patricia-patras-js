$(function () {
  // $('#dialog').dialog();
  const altAlert = (message) => {
    const $dialog = $('#dialog');

    $dialog.find('p').text(message).end().dialog();
  };

  window.alert = altAlert;
});
