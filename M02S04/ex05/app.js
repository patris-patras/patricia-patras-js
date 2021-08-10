$(() => {
  const $submitButton = $('#personForm button[type="submit"]');
  const $personForm = $('#personForm');

  $personForm.validate();

  $(personForm).personForm('input', 'input', function () {
    const $input = $(this);

    if (!$personForm.validate()) {
      console.log('not valid');
      $submitButton.attr('disabled', 'true');
    } else {
      console.log('valid');
      $submitButton.removeAttr('disabled');
    }
  });
});
