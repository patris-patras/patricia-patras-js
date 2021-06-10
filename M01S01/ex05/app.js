var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var result = 0;

    result = (4 / 3) * Math.PI * radius ** 3;

    elementResult.innerText = result;

    event.preventDefault();
  },
  false,
);
