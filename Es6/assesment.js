// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

// const heroes = [
//   { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
//   { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
//   { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
//   { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
//   { name: 'Batman',         family: 'DC Comics', isEvil: false },
//   { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
//   { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
//   { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
//   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
// ]

// //a
// //Ans
// let heroNotevil = heroes.filter((evil)=>evil.isEvil==false);

// console.log(heroNotevil);

// //b
// //Ans.

// for(const key of heroes){
//     console.log(key.family);
// }

// //c.
// let heroSir = heroes.map((prsn)=>{
//     if(prsn.family=="Marvel"||prsn.family=="Tolkien"||prsn.family=="DC Comics"){
//         return{"Heroes ":`Sir ${prsn.name}` }
//     }
// })
// console.log(heroSir);

// //d.
// let heroesNotEvil = heroes.filter((prsn)=>{prsn.isEvil==false})
// console.log(heroesNotEvil);
// //No

// //2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

// //3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

// let promiseObject = new Promise((resolve,reject)=>{

//     setTimeout(()=>{

//         resolve({
//             "Status":"clear",
//             "Object":"Resolved"
//         })

//     },2000)

//     setTimeout(()=>{
//         reject({

//             "Status":"failed",
//             "Object":"unresolved"
//         })
//     },3000)
    
   
// })

// promiseObject.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// })

//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

//Spread:

// let arrCity = ["NYC","PARIS","MILAN","SF"];

// //console.log(...arrCity);

// //Rest
// let arr=[1,2,34,4,5]
// let Sum = function(a,b,...restParam){
//     return a+b;

// }

// console.log(Sum(...arr));

// function Sum2Rest(...restParam){
//     let sum = 0;

//     sum = restParam.reduce((preval,currval,index,arr)=>{

//         // console.log(preval);
//         // console.log(currval);
//         // console.log(index);
//         // console.log(arr);

//         return preval+currval;
//     },0)

//     return sum;

// }

// console.log(Sum2Rest(...arr));

// 5. Print the last name through destructuring and add a contact number:9119119110 as well
// const person = {
//     userDetails :{
//         first: "FirstName",
//         last: "LastName"
//     }
// }

// //Ans

// const {
//     userDetails :{
//         first: FirstName,
//         last: LastName,
//         mobilePh=510777997
//     }
// } = person;

// console.log(mobilePh);
// console.log(person.userDetails.last);




//6. Give me an example of const data manipulation

// const User = {name:"Anant",Age:24,Height:"6'4"};

// User.Height="Tall";

// console.log(User);

//7. What is the difference between for-of and for-in show with examples

const Arr=[15,25,36,46,57]

//for in loop: Iterates over the property of the array

for(const key in Arr){
    console.log("Index: "+key);
    console.log("Value: "+Arr[key]);
}
//for of loop: Iterates over the property names,arrays etc

console.log("Values are As follows");
for(const key of Arr){
    console.log(":"+key);
}

//8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

let permission = true;

let signIn = new Promise((resolve,reject)=>{

resolve({
    "Status":"succeded",
    "code":"200"
})
reject({
    "Status":"failed",
    "code":"500"
})
})
let userregistration = new Promise((resolve,reject)=>{


    resolve({
        "Status":"succeded",
    "code":"200"
    })
    reject({
        "Status":"failed",
        "code":"500"
    })
    })
    let nextpageToNavigate = new Promise((resolve,reject)=>{
        resolve({
            "Status":"succeded",
    "code":"200"
        })
        reject({
            "Status":"failed",
            "code":"500"
        })
        })
        Promise.allSettled([signIn, userregistration, nextpageToNavigate])
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });

//9. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios


// Optional -
//10. Using the promise object at #3 create an async and await feature