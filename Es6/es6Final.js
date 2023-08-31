// let dynVal = 25000
// let templateLit = `
// Lorem Lipsum Lorem Lipsum Lorem Lipsum
// Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
// Lorem Lipsum Lorem Lipsum Lorem Lipsum
                
// Lorem Lipsum Lorem Lipsum Lorem Lipsum
//                                                             <h1>Header<h1>
// Lorem Lipsum Lorem Lipsum Lorem Lipsum
//                     `
// console.log(templateLit);

//Spread And Rest

//Spread: 

//  let arrayCities = {City:"NYC",City:"SF",City:"LA"};

// // console.log(...arrayCities);

// let ArrayStates = {State:"NJ",State:"CA",State:"CA"};

// let cities = {...ArrayStates,...arrayCities};

// console.log(cities);

// let User = { name : "Jason", age : 25 }
// let Address = {home : "Somewhere in US", office : "Virtual"}

// let Employee = {...User, ...Address}

// console.log(Employee);

///In the case above only unique objects can be combined

// function Sum(p1,p2,p3){
//     return p1+p2+p3
// }
// let arr = [1,2,3]
// console.log(Sum.apply(null,arr));
// console.log(Sum(...arr));

//Rest:

// function RestSum(...restParam){
//     let sum = 0;

//     sum = restParam.reduce((preval,currVal,index,arr)=>{
//         // console.log(index);
//         // console.log(arr);
//         return preval+currVal;
//     })

//    return sum;
// }

// console.log(RestSum(1,2,5,6));


//ShortHand

// let cat = "Miaow",
// dog= "woof",
// cow = "moo";

// let AnimalSounds = {
//     Cat:cat,
//     Dog:dog,
//     Cow:cow
// }

// console.log("Using JS"+JSON.stringify(AnimalSounds));

// let AnimalSoundsEs6 = {
//     cat,
//     dog,
//     cow
// }

// console.log("Animal sounds using es6",AnimalSoundsEs6);

//for in and for off loop

//For in loop iterates ober property values

// let myArr = ["London","Sf","Macao"];

// for(const key in myArr){
//     console.log(key);
//     console.log(myArr[key]);
// }

// //for of loop iterates over property names

// for(const key of myArr){
//     console.log(key);
// }

//Destructuring:

let student = { stname : "Jason", branch : "Science", subjects : { math : 99, english : 95, chemistry : 96 } }


let { stname, subjects : { math, chemistry, physics = 99} } = student

console.log(stname)
console.log(math)
console.log(chemistry)
console.log(physics)