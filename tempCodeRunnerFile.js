//terminal packages
require('colors');

//our packages
const { showMenu, pause } = require('./helpers/messages');

console.clear();

//main
const main = async () => {
  console.log('Hola Mundo');

  let opt = '';

  //show menu
  do {
    opt = await showMenu();
    console.log({ opt });
    await pause();
  } while (opt !== '0');
};

main();
