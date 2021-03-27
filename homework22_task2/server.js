//     2. Ստեղծել express framework-ով web aplication :
//     Ստեղծել /users route , որին կարող են կատարել
//     GET, POST , PUT և DETELE մեթոդներով request-ներ ։
//     Բոլորի դեպքում վերադարձնում որպես response ժամը և մեթոդի անունը։
// const readable = fs.createReadStream('users.json');



const http = require('http');
const express = require('express');
const router = require('./router');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

router(app);

http.createServer(app).listen(2021);