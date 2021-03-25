// 3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի
// պարունակությունը, տեքստից կհեռացնի  ստորակետները
// և կգրի replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:
//
let fs=require('fs');
async function getFile(path) {
    const readStream = fs.createReadStream(`${path}`, 'utf8', {
        highWaterMark: 64,
    });
    const writeStreamToFile = fs.createWriteStream('replace.txt');
    await readStream.on('data', function (data) {
        data=data.toString().replace(/,/g, "");

          writeStreamToFile.write(data);
    });
   await fs.unlink(`${path}`,function (err) {
       if (err) throw err;
       console.log('File deleted!');
   });
}
getFile('homework3.txt');
