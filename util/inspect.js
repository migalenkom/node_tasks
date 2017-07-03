var util = require('util');

var object = {
  a: 5,
  b: 6,
  inspect: function() {
    return 'it works';
  }
};
object.self = object;

console.log(util.inspect(object));

// to_string
