var user = require('./user')

var world =  new user.User("World");
var me = new user.User("Mike");

world.helo(me);
