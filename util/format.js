var util = require('util');

var st = util.format("My %s %d %j", "string", 123, {test: "obj"});

console.log(st);
console.log("My %s %d %j", "string", 123, {test: "obj"})
