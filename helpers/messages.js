require('colors');

const showMenu = () => {
  console.clear();
  console.log(' ==============================='.green);
  console.log('       Select an option: '.green);
  console.log(' ===============================\n'.green);

  console.log(`${'1'.green} Crear Tarea`);
  console.log(`${'2'.green} Listar Tareas`);
  console.log(`${'3'.green} Listar Tareas Completadas`);
  console.log(`${'4'.green} Listar Tareas Pendientes`);
  console.log(`${'5'.green} Completar Tarea(S)`);
  console.log(`${'6'.green} Borrar Tarea`);
  console.log(`${'0'.green} Salir \n`);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question('Select an option: ', (opt) => {
    readline.close();
  });
};

const pause = () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`\n Presione ${'ENTER'.green} para continuar\n`, (opt) => {
    readline.close();
  });
};

module.exports = {
  showMenu,
  pause,
};
