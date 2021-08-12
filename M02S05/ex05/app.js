const altAlert = (message) => {
  const myModal = picoModal(message);

  myModal.show();
};

window.alert = altAlert;

// altAlert devine doar un pointer catre window alert asa
