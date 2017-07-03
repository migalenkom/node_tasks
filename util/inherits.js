var util = require('util')

function Animal(name) {
  this.name = name;
}
Animal.prototype.walk = function() {
  console.log("Ходит " + this.name);
};

function Dog(name) {
  this.name = name;
}

util.inherits(Dog, Animal); //почему игает роль когда я унаследую родительский клас ?

Dog.prototype.voice =  function() {
  console.log("Гавкает " + this.name);
};

//util.inherits(Dog, Animal); //если вызвать здесь нет метода voice();

var dog = new Dog('мой Бобик');

dog.walk();
dog.voice();
