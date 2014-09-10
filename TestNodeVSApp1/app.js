var fs = require("fs");
var body = "Take1 using fs";
var filePath = 'D:/Temp/nodelogs.txt';
fs.open(filePath, 'a+', function (err, fd) {
    if (err) {
        console.log(err);
    }
});
fs.appendFileSync(filePath, body);
fs.closeSync(filePath);


