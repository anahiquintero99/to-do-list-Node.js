const { v4: uudiv4 } = require('uuid');

class Homework {
  id = '';
  desc = '';
  completedIn = null;

  constructor(desc) {
    this.id = uudiv4();
    this.desc = desc;
    this.completedIn = null;
  }
}

module.exports = Homework;
