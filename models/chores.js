const Homework = require('./homework');
/**
 * _listado:
 *    {'uuid-123712-123123-2: {id:12, desc:asd, completedIn:92231} },
 */

class Chores {
  _listado = {};

  get listArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const task = this._listado[key];
      listado.push(task);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  createTasks(desc = '') {
    const task = new Homework(desc);
    this._listado[task.id] = task;
  }
}

module.exports = Chores;
