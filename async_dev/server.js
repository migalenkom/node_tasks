var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
  var info;
  if(req.url == '/'){

    try {
      info = fs.readFileSync('index.html');
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.end('Error');
      return
    }
    res.end(info);
  }
}
).listen(3000);
