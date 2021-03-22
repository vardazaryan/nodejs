
// 1. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան
// 10 բայթով և կաևտածի կոնսոլում այն chunk-երը , որոնք հատուկ սիմվոլներ չունեն:
const {Readable, Duplex, Writable, Transform} = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream('input.txt', {
    highWaterMark: 10,
});

readStream.on('data',function (chunk) {
    if (!/[^a-zA-Z0-9' ']/.test( chunk.toString())) {//եթե պրոբելը չհամարենք հատուկ սիմվոլ
        console.log(chunk.toString());

    }

});
