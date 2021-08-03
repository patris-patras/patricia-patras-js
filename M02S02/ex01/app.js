// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care tb sa apara in para',
  class: 'class de css',
});
// $() = jQ; basic syntax $(selector).action()

// cand vede <p> => tre sa creeze undeva un tag p; apoi ii zici ce sa puna in p
// toate randurile 1 - 4 de mai sus le ai intr-o singura linie

const $body = $('body');
$('body').append($p); // $('body') e selector si ii pun inauntru p - echivalent document.body.appendChild(p);

console.warn(`Creaza inca un paragraf cu idul message care sa contina textul:
“Parola nu trebuie sa fie mai mica de 5 caractere.”.`);

/* v1
const $errorMessage = $('<p>', {
  id: 'message',
  text: 'Parola nu tb sa fie mai mica de 5 char', // innerText in cazul DOM
}); // in, {}, adica al IIlea paramertru - "obiectul de configurare"
$errorMessage.appendTo($body);
*/

// v2
const $errorMessage = $('<p>', {
  id: 'message',
  text: 'Parola nu tb sa fie mai mica de 5 char',
}).appendTo($body); // practic return-ul metodei asteia e p-ul creat

console.warn(`Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect
pentru a ii adauga clasa error.`);

setTimeout(() => {
  $errorMessage.addClass('error');
}, 5000);

console.warn(`Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul:
“Am schimbat dinamic acest paragraf.” Folosind metoda .text()`);
$('#myParagraph').text('Am schimbat dinamic acest para');

// Creeaza un element de tip span cu idul example si cu textul “ParolaMea”
// si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// facem fara variabila; in DOM scrip. nu ai cum dar aici in jQ poti

// v1 - e mai eficienta/performant evident ptr ca am deja $errorMessage in memorie
/*
$('<span></span>', {
  id: 'example',
  text: 'Parola Mea',
}). appendTo($errorMessage);
*/

//v2
$('<span></span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($('#message'));

/** Creeaza un element de tip h2 cu textul “Mesaje”
 * si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
 */

const $container = $('.container');
$('<h2>', {
  text: 'Mesaje',
}).prependTo($('.container'));

// apendTo() & prependTo()

// teme pt.9- 14

// CERINTA
// Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda .after() https://api.jquery.com/after/

// $('<div></div>', {
//   class: 'navigation',
//   text: 'div-navigation',
// }).insertAfter($('.container'));

// $('.container').after($('<div></div>'), {
//   class: 'navigation',
//   text: 'div-navigation',
// });

const $nav = $('.container').after('<div>div-nav-after</div>');
$nav.addClass('navigation');

// CERINTA
// Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation

$('<a></a>', {
  text: 'Primul Link',
  class: 'nav-link',
}).appendTo('.navigation');

// CERINTA
// Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation.
// Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link

$('<h2></h2>', {
  text: 'Navigatie',
}).before('.navigation .nav-link');

$('.navigation .nav-link').before('<h2>Navigatie</h2>').addClass('nav-title');

// QUESTION
// $('.navigation .nav-link').before('<h2>Navigatie</h2>').addClass('nav-title');
// de ce nu imi merge sa adaug clasa asa ?

// CERINTA
// Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link

$('.navigation .nav-link').prepend('<sup>1</sup>');

// CERINTA
//Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind metoda .before() adauga-l deasupra divului .container

const $h1 = $('<h1>', {
  text: 'Invat jQuery',
});

$('.navigation').before($h1);

// CERINTA
// Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery poate fi gasita aici.”
// Cuvantul aici va fi o ancora care va deschide intr-o pagina noua documentia jQuery.
// Atributele target si href pot fi setate in acelasi fel cum sunt setate cele text sau class.

const $learningPara = $('<p>', {
  id: 'learning',
  class: 'learning',
  text: 'Documentatia jQuery poate fi gasita ',
});
$('body').append($learningPara);

$('<a></a>', {
  id: 'resourcesLink',
  text: 'aici',
  href: 'https://api.jquery.com/',
  target: '_blank',
}).appendTo($learningPara);

$('<span></span>', {
  id: 'endDot',
  text: '.',
}).insertAfter($('#resourcesLink'));
