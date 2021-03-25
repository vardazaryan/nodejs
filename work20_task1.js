// 1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:
let fs=require('fs');
let os = require('os');
const {Readable, Duplex, Writable, Transform} = require('stream');
const   oc=os.userInfo().username;
const writeStreamToFile = fs.createWriteStream(`${oc}`);
console.log(typeof (os.userInfo()));
let myJSON = JSON.stringify(os.userInfo());
writeStreamToFile.write(`${myJSON}`, 'utf-8',
    (err) => {
     console.log(err)});


