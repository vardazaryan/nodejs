const  memoryUsage=require('./consol');
const os = require('os');
const fs = require('fs');

const random = require('random');
memoryUsage;
const c=os.networkInterfaces();
console.log(c);

fs.readFile('input.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
    const u=data.replace(' ' ,'_' );
    console.log(u);
    fs.writeFile('write.txt', u,  'utf8', function (err) {
        if (err) return console.log(err);

    });
})
let aName="";
for(let i=0;i<8;i++){
    aName+=random.float(0,9);
}


let oc;
fs.writeFile(`${aName}` ,oc, function (err) {
    if (err) return console.log(err);

});