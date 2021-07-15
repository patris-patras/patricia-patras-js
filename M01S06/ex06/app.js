const paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  const messageParagraph = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');

    document.body.appendChild(logContainer);
  }

  messageParagraph.innerText = message;
  logContainer.append(messageParagraph);
};

console.domLog = paragraphLog;

/* In loc de a suprascrie metoda log() a consolei,
adauga alta numita console.domLog() si asigneaza functia la ea, apoi foloseste-o in consola.


console.log = paragraphLog;
schimb in
console.domlog = paragraphLog;

*/
