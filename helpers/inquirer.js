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
        name: '1.Crear Tarea',
      },
      {
        value: '2',
        name: '2.Listar Tareas',
      },
      {
        value: '3',
        name: '3. Listar Tareas Completadas',
      },
      {
        value: '4',
        name: '4.Listar Tareas Pendientes',
      },
      {
        value: '5',
        name: '5.Completar Tarea(S)',
      },
      {
        value: '6',
        name: '6.Borrar Tarea',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];

const inquirerMenu = async () => {
  //console.clear();
  console.log(' ==============================='.green);
  console.log('       Select an option: '.green);
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

module.exports = {
  inquirerMenu,
  pause,
};
