// 5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,
//     կստեղծի newDir պապկա և այնտեղ
// //     կտեղափոխի այն ֆայլերը իրենց պարունակություններով որոնք 1kB մեծ են :

const fs = require('fs');


 function fileCopy(patch) {


   fs.readdir(`${patch}`, async  function (err, files) {
         //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

                fs.mkdir('newDir' , (err) => {
            if (err) {
                throw err;
            }
            console.log("Directory is created.");
        });
       files.forEach( function (file) {

           console.log(file);
           fs.stat(`${patch}/${file}`, (err, stats) => {
               if (err) {
                   console.error(err)
                   return
               }
               console.log(stats);

if(stats.size>1024) {
    try {
        fs.copyFileSync(`${patch}/${file}`, `./newDir/${file}`)
        console.log("Successfully copied and moved the file!")
    } catch (err) {
        throw err
    }

}


           })


        });
    });

};
fileCopy('Homework5');