var http = require("http");
var fs = require("fs");

var filePath = 'D:/Temp/nodelogs.txt';


fs.exists(filePath, function(exists) {
    if (!exists) {
        fs.writeFile(filePath, '', function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    }
});

http.createServer(function (request, response) {
    var body = "";
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function () {
        console.log('POSTed: ' + body);
        fs.appendFile(filePath, body, 'a+', function (err) {
            console.log(err);
        });
    });
    
    response.writeHead(200, { "Content-Type": "text/plain" });
    //response.Write("Hello Folks");
    response.end();
}).listen(8888);