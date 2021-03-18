// 1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում , եթե թիվը փոքր է
// 5-ից reject է անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։
const random = require('random');


const promise1 = new Promise((resolve, reject) => {

    let rand=random.int(0,10);
    if(rand>5) {


        resolve(`${rand} `);
    }else{
        reject(`error`);
    }
});

promise1.then((value) => {

        console.log(value);
});

console.log("next operation");



