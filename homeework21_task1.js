// 1.Գրել ծրագիր, որը կստուգի , եթե req.url /sunny է,
// ապա console-ում տպի Yes.
//
http = require('http');
let url = require('url');

let server = http.createServer(function (req, res) {
    res.writeHead(200, '{Content-Type: text/html; charset=utf-8}');
    if (req.url === '/sunny') {
        console.log('yes');
    }

    res.end('text');
})
server.listen(8080);




