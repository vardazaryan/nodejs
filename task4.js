// Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում
// //     է տեքստ ֆայլի հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․
const {createReadStream, createWriteStream} = require('fs');
const fs = require('fs');
const patch=require('path');
const {Readable, Duplex, Writable, Transform} = require('stream');
let i=1;
const writableStream = createWriteStream(
    'inp.txt', {encoding: 'utf8'});

const readStream = createReadStream('inp.txt', {
    highWaterMark:100,
});


     readStream.on('data', function (data) {

         const promise1 = new Promise((resolve, reject) => {
 let str=data.toString();
    str = str.split(' ');
    for(let i in str)
    str[i]=str[i].toString().charAt(0).toUpperCase() + str[i].toString().slice(1);
    let newest= str.join(' ');
resolve(newest);

     }).then( (data) => {
             writableStream .write(data);
         });

})
