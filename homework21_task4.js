

// 4․ Ստեղծել myMap մեթոդ Array-ի համարար , որը կաշխատի ինչպես map մեթոդը.
// [].map(fn) -ը կարողանանք գրել [].myMap(fn) -ի միջոցով ։
Array.prototype.myMap = function(f) {

let map=[];
for (let i = 0; i < this.length; i++) {


        map.push(f(this[i]));

    }
return map;
};
let s=[1,2,3,4,5,];
s.myMap((p)=>{console.log(p*3)});
let numbers = [65, 44, 12, 4];
let newarray = numbers.myMap(myFunction)

function myFunction(num) {
    return num * 10;
}
console.log( newarray );