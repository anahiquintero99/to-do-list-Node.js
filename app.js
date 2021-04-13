//terminal packages
require('colors');

//our packages
const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async () => {
  console.log('Hola Mundo');
  showMenu();
  pause();
};

main();
