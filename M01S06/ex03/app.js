document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button'); // se opreste la primul selector numit button

  button.addEventListener('click', () => {
    alert('Am apasat!');
  });
});
