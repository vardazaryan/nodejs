// 2.Server-ում ունենք sunny.txt ֆայլ:
// Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ file դաշտը և այն հավասար է "sunny",
// որպես response ստանա sunny.txt պարունակությունը այլապես 404 status-ով ստանա "File Not Found".
// (Օգտագործել Get մեթոդը):
const {Readable, Duplex, Writable, Transform} = require('stream');
const fs=require('fs');
let http = require('http');
let url = require('url');

let server = http.createServer(function (req, res) {
    res.writeHead(200, '{Content-Type: text/html; charset=utf-8}');

    let   q = url.parse(req.url, true);;

        if (q.query.file && q.query.file === 'sunny') {
            fs.createReadStream('./sunny.txt', {highWaterMark: 1}).pipe(res);
        }

})
server.listen(8080);

