const fs = require('fs');

fs.writeFileSync('./my-file.txt', 'Invat node.js');

const data = fs.readFileSync('./my-file.txt', 'utf-8');
let today = new Date();
today = today.toLocaleDateString('ro');

console.log(data + ', azi, ' + today + '.');
