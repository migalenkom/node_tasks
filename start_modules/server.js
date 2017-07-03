var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var world = new User("World");
  var me = new User("Mike");

  world.helo(me);
  log(db.getTranslation("Run seccessfull"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
