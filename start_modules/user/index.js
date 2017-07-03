var translation = require('./ru')

function User(name){
  this.name = name;
}

User.prototype.helo = function(who){
  console.log(translation.Hello + ", " + who.name);
};

console.log("User is required");

exports.User = User
// global.User = User
