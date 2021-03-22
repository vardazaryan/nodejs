
//     2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորուchunckթյամբ կսարքի հայատառ:
//     Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը:
//     Ստեղծել readStream և highWaterMark:1  նշելով
//     բոլոր սիմվոլների վրայով անցնել:
//     Ծրագիրը աշխատացնել homework4Eng.txt համար:

const {Readable, Duplex, Writable, Transform} = require('stream');
const fs = require('fs');
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

        let arm=['ա','բ','ս','դ','ե','ֆ','գ','հ','ի','ժ','կ','լ','մ','ն','օ','պ','ք','ռ','ս','տ','ու','վ','ո','ք','յ','զ',' ']

const readStream = fs.createReadStream('input.txt', {
    highWaterMark: 1,
});
const   writeStream = fs.createWriteStream('homework4Eng.txt', );
readStream.on('data',function (chunk) {

    for (let i in arr_en) {
        if (arr_en[i].toLowerCase() === chunk.toString()) {

            writeStream.write(arm[i]);
        }
    }

});