// 2․ ՈՒնենք config.json ֆայլ ,
//     {
//         "host" : "localhost",
//         "port" : 3000
//     }
// պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։
const http = require('http');


http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(3000);



