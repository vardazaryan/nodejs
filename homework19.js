


const {Readable, Duplex, Writable, Transform} = require('stream');
const zlib = require('zlib');
const fs = require('fs');
// Stream.Readable,
//const {Readable, Duplex, Writable, Transform} = require('stream');
// Stream.Writable,readStream.on('data',function (chunk) {
//     writeStream.write(chunk.toString());
//     console.log(chunk.toString());
// })
// Stream.Duplex,
// Stream.Transform,


const readStream = fs.createReadStream('input.txt', {
    highWaterMark: 10,});
const   writeStream = fs.createWriteStream('in.txt', )



class ArrayReadable extends Readable {
    constructor(array) {
        super();
        this.array = array;
        this.index = 0;
    }
    _read(size) {
        if (this.index < this.array.length/2) {
            this.push(this.array[this.index].toString());
            this.index++;
        } else {
            this.push(null);
        }
    }


}

const customStream = new ArrayReadable([1, 2, 3, 4,5,7]);

customStream.on('data', (item) => {
    console.log(item.toString());
});


const {Readable, Duplex, Writable, Transform} = require('stream');
const zlib = require('zlib');
const fs = require('fs');

// Stream.Readable,
// Stream.Writable,
// Stream.Duplex,
// Stream.Transform,
//
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('input.txt', {
    highWaterMark: 4
});
const writeStreamToFile = fs.createWriteStream('output.txt');
const writeStream = fs.createWriteStream('output.gz');

// readStream.on('data', function (chunk) {
//     writeStream.write(chunk);
// });

const transform = new Transform({
    transform(chunk, encoding, next) {
        this.push(chunk.toString().toUpperCase());
        next();
    }
});
// readStream.pipe(gzip).pipe(writeStream);

process.stdin.pipe(transform).pipe(writeStreamToFile);


new Readable({
    read(size) {
        this.push('')
    }
})
new Writable({
    write(chunk, encoding, callback) {

    }
})


class ArrayReadable extends Readable {
    constructor(array) {
        super();
        this.array = array;
        this.index = 0;
    }

    _read(size) {
        if (this.index < this.array.length) {
            this.push(this.array[this.index].toString());
            this.index++;
        } else {
            this.push(null);
        }
    }
}

const customStream = new ArrayReadable([1, 2, 3, 4]);

customStream.on('data', (item) => {
    console.log(item.toString());
});

customStream.on('end', () => {
    console.log('end');
})

//readStream.on('data', function (chunk) {
//     writeStream.write(chunk);
// });

//     2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորուchunckթյամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը: Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել:
//     Ծրագիրը աշխատացնել homework4Eng.txt համար:
//
//     3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է
//     Transform կլասին: _transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
//
//     Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:
//
//     4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում
//     է տեքստ ֆայլի հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․