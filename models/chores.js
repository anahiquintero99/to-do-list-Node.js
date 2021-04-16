/**
 * _listado:
 *    {'uuid-123712-123123-2: {id:12, desc:asd, completedIn:92231} },
 */
const Homework = require('./homework');

class Chores {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  createTasks(desc = '') {
    const task = new Homework(desc);
    this._listado[task.id] = task;
  }
}

module.exports = Chores;
