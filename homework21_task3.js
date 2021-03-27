
// 3. Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "fisrt_name", "last_name", "email", "age"
// դաշտեր պարունակող օբյեկտներից ։
// Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը ,
// վերադարձնել users.json-ից զանգված միայն այն օբյեկներից ,
//     որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։
let http = require('http');
let url = require('url');
let  fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true);
    let filename =q.query.filter;
    console.log(filename);
    if( filename) {}
        fs.readFile('users.json ', function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            }
            let jsonContent = JSON.parse(data.toString());

                Object.entries(jsonContent).forEach(([key, value]) => {
                    //console.log(`${key}: ${value}`);
                    for(let i in value){
                        Object.entries(value[i]).forEach(([key1, value1]) => {
                            if (`${key1}` === "fisrt_name" && value1==filename||`${key1}` === "last_name" && value1==filename) {
                                console.log(value[i]);
                                let myJSON = JSON.stringify(value[i]);
                                res.end(myJSON);
                            }
                        });
                    }


                })




        })

}).listen(8000);

