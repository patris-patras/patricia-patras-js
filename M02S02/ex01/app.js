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
// $ inseamna ca am in var jQ; --> e doar conventie
// cand vede <p> => tre sa creeze undeva un tag p; apoi ii zici ce sa puna in p
// toate randurile 1 - 4 de mai sus

const $body = $('body');
$('body').append($p); // $('body') e un selector sii ii pun inauntru p - echivalent rand 6

console.warn(`Creaza inca un paragraf cu idul message care sa contina textul:
“Parola nu trebuie sa fie mai mica de 5 caractere.”.`);

/* v1
const $errorMessage = $('<p>', {
  // in, {}, adica al IIlea paramertru - "obiectul de configurare"
  id: 'message',
  text: 'Parola nu tb sa fie mai mica de 5 char', // innerText in cazul DOM
});
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
// facem fara variabila; in DOM scrip. nu ai cum dar aiciin jQ poti

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
  text: 'Parola Mea',
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
