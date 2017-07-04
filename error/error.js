var util = require('util');
var phrases = {
  "Hello": "Привет",
  "world": "мир"
};

function PharaseError(message) {
  this.message = message;
  Error.captureStackTrace(this);
}
util.inherits(PharaseError, Error);
PharaseError.prototype.name = 'PharaseError';


function HttpError(status, message) {
  this.status = status;
  this.message = message;
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
  if (!phrases[name]) {
    throw new PharaseError("Нет такой фразы " + name);
  }
  return phrases[name];
}

function makePage(url) {
  if (url != 'index.html') {
    throw new HttpError(404, "Нет такой страницы");
  }
  return util.format("%s %s!", getPhrase("***"), getPhrase("world"));
}

try {
  var page = makePage('index.html');
  console.log(page);

} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error("Ошибка %s\n сообщение  %s\n стек: %s", e.name, e.message, e.stack);
  }

}
