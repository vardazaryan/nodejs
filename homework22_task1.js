// 1.  Ստեղծել homework իրադարձությունը լսող , որը կկանչի handler :
//     handler-ը պետք է արտածի Homeworks.txt պարունակությունը: emit անել homework :

const fs = require('fs');
const {EventEmitter} = require('events');


const homework= new EventEmitter();

homework.on('handler', () => {
    const readStream = fs.createReadStream(`sunny.txt`, 'utf8', {
        highWaterMark: 1,
    });
     readStream.on('data', function (data) {

         console.log(data);
         res.write(readStream)

    });


})

homework.emit('handler');


