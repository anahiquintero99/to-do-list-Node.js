const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green}Crear Tarea`,
      },
      {
        value: '2',
        name: `${'2.'.green}Listar Tareas`,
      },
      {
        value: '3',
        name: `${'3.'.green}Listar Tareas Completadas`,
      },
      {
        value: '4',
        name: `${'4.'.green}Listar Tareas Pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.green}Completar Tarea(S)`,
      },
      {
        value: '6',
        name: `${'6.'.green}Borrar Tarea`,
      },
      {
        value: '0',
        name: `${'0.'.green}Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  //console.clear();
  console.log(' ==============================='.green);
  console.log('       Select an option: '.white);
  console.log(' ===============================\n'.green);

  const { opcion } = await inquirer.prompt(questions);

  return opcion;
};

const pause = async () => {
  const questionPause = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar\n`,
    },
  ];

  console.log('\n');
  await inquirer.prompt(questionPause);
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
};
