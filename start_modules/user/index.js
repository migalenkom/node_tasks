var log = require('logger')(module);

var db = require('db')

function User(name) {
  this.name = name;
}

User.prototype.helo = function(who) {
  log(db.getTranslation("Hello") + ", " + who.name);
};
// console.log("User is required");

module.exports = User;
// exports.User = User
// global.User = User
// console.log(module);
