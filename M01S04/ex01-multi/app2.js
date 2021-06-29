console.warn(
  'Foloseste aceeasi metoda pentru a captura numele utilizatorului si pentru a afisa in document mesajul: “Numele meu este: xxx yyy.”',
);

var firstName = window.prompt('Prenumele tau:');
var lastName = window.prompt('Numele tau:');
var message = document.getElementById('message');

message.innerText = `Numele tau este ${firstName} ${lastName}.`;

console.warn(
  'Folosind aceeasi metoda afiseaza in document propozitia: “Numele introdus are xxx caractere.” Inlocuieste spatiile cu stringul gol pentru a nu le numara. ',
);

// replace are nev de o var
// inlocuieste o prima instanta dintr-un mini-string cu altul

var textulInCareModific = 'Numele introdus are xxx caractere.';

message.innerText = textulInCareModific.replace('xxx', '');

console.warn(
  'Folosind prompt() si String.includes() afiseaza mesajul: “Numele introdus contine|nu contine litera a.',
);
// Folosind prompt() si String.includes() afiseaza mesajul:
// “Numele introdus contine|nu contine litera a.”

var sentence = firstName + lastName;

prompt(
  `Numele introdus ${
    sentence.includes('a') ? 'contine' : 'nu contine'
  } litera a`,
);

// sintaxa operator ternar, un if-else prescurtat: "conditie" "operator" ? "daca e adevarat" : "daca e fals";

// in randare de ce imi da in ordinea asta:
// prompt('Prenumele tau:')
// apoi prompt('Numele tau:');
//apoi prompt(`Numele introdus... din ultimul exercitiu
//si abia apoi imi da message.innerText = `Numele tau este ${firstName} ${lastName}.`; linia 9
