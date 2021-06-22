var value = window.prompt();
var paragraphElement = document.getElementById('message');
var message = '';

value = Number(value);

if (value % 2 === 0) {
  message = 'Numarul este par';
} else {
  message = 'Numarul este impar';
}

if (isNaN(value)) {
  message = 'Nu ai introdus un numar!';
}

paragraphElement.innerText = message;

// console.log(`Valoarea este: ${value}`);
