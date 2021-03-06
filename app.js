//terminal packages
require('colors');

const { saveDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Chores = require('./models/chores');

//main
const main = async () => {
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
        console.log(tasks.listArr);
        break;
    }

    saveDB(tasks.listArr);

    await pause();
  } while (opt !== '0');
};

main();
