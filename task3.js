// 3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի երկու
// մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:
let  fs = require('fs/promises');
fs.readFile('input.txt').then( function (data){
    async function fil() {
       const dat=data.toString()
        let promise1= await fs.writeFile('output3.txt ', dat.toString().slice(0,dat.length/2).concat(`${Date.now()}`));
        let promise2 = await fs.writeFile('output4.txt', data.toString().slice(data.length/2,data.length).concat(`${ Date.now()}`))


    }
fil().then( console.log(Date.now())  );
    }
)


