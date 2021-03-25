
//     4.Ունենք const web=['html','css','js','txt'] զանգված: Գրել ծրագի որ կստեղծի զանգվածի անունով պապկա:
//     Զանգվածի անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և վերջավորությունն էլ նույնը
//     լինի(օրինակ html.html) պարունակություն էլ այդ անդամը:


const fs = require("fs");



const dir = './webweb';

// create new directory
fs.mkdir(dir, (err) => {
    if (err) {
        throw err;
    }
    console.log("Directory is created.");
});




const web=['html','css','js','txt'];
for(let i of web )
    fs.appendFile(`./webweb/${i}.${i}`, `${i}.${i}`,function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
