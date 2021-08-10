const form = document.getElementById('personForm');
const submitButton = form.querySelector('button[type]="submit'); // form.query... =>cauta doar in elem form

const personForm = new Pristine(form);
const isValid = personForm.validate(submitButton, true);

if (!isValid) {
  submitButton.disabled = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // do ajax stuff...
});

form.addEventListener('input', (event) => {
  const target = event.target;

  if (target.nodeName !== 'INPUT') {
    return false;
  }

  const isValid = personForm.validate(target, true);
  submitButton.disabled = !isValid;
});
