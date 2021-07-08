(function (top) {
  console.log('IIFE, SIAF');

  top.MyName = 'PP';
})(top);

console.log(top.MyName);

// top <=> window
