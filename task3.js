//     3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է
//     Transform կլասին: _transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
//
//     Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:
const {Readable, Duplex, Writable, Transform} = require('stream');
const zlib = require('zlib');
const fs = require('fs');

const writeStreamToFile = fs.createWriteStream('homeworkr5.txt');
const readStream = fs.createReadStream('input.txt', {
    highWaterMark:64,
});

class RemoveSpecialChars extends Transform {
    _transform (chunk, encoding, callback) {

        writeStreamToFile.write(chunk.toString().replace(/[^a-zA-Z0-9' ']/gi, ""));
        //writeStreamToFile.write(chunk.toString());
        console.log(chunk.toString());

        callback();
    }
}

const RemoveSpecial = new RemoveSpecialChars ({ });
readStream.pipe(RemoveSpecial);
;


// const transform = new Transform({
//     transform(chunk, encoding, next) {
//        let res=chunk.toString().replace(/[^a-zA-Z0-9" "]/gi, "");
//     return res;
//         next();
//     }
// });
// .pipe(transform).pipe(writeStreamToFile);
// class RemoveSpecialChars extends Readable {
//     constructor(array) {
//         super();
//         this.array = array;
//         this.index = 0;
//     }
//     _transform(){
//
//     }
//
//     _read(size) {
//         if (this.index < this.array.length/2) {
//             this.push(this.array[this.index].toString());
//             this.index++;
//         } else {
//             this.push(null);
//         }
//     }
//
//
// }



