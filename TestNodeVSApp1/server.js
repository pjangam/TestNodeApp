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
    response.writeHead(200, { "Content-Type": "text/plain" });
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function () {
        response.write(request.method+'ed: ' + body);
        response.end();
        fs.appendFile(filePath, request.method + 'ed: ' + body+'\n', { encoding: 'utf-8', mode: 438, flag: 'a+' }, function(err) {
            if (err) console.log(err);
        });
    });
}).listen(8888);