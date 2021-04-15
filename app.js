//terminal packages
require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');

console.clear();

//main
const main = async () => {
  console.log('Hola Mundo');

  let opt = '';

  //show menu
  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pause();
  } while (opt !== '0');
};

main();
