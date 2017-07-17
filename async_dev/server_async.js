var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
  var info;
  if(req.url == '/'){

    fs.readFile('index.html', function(err, info){
      if(err){
        console.log(err);
        res.statusCode = 500;
        res.end("server Error");
        return;
      }
      res.end(info);
    });
    
  }
}
).listen(3000);
