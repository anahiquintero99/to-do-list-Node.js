//terminal packages
require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Chores = require('./models/chores');

//main
const main = async () => {
  console.log('Hola Mundo');

  let opt = '';
  const tasks = new Chores();

  //show menu
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //created option
        const desc = await readInput('Descripción: ');
        tasks.createTasks(desc);
        break;

      case '2':
        console.log(tasks._listado);
        break;
    }

    await pause();
  } while (opt !== '0');
};

main();
