//Spread : is used to spread the elements of any object or array to be used one by one
let arrayOFCities = ["Rome","NYC","GGN"];

console.log(...arrayOFCities);


//Spread is used to combine two objects together and preserves their mutability

let User = {name:"Jason",age:24};
let Address = {addr:"Hayward,Ca"};

let Employee = {...User,...Address};

console.log(Employee);

//how to use the spread with functions:

function Sum(a,b,c,d,e,f){

    return a+b+c+d+e+f;

}

let arr = [1,2,3,4,5,6,7,7,7];

console.log(Sum(...arr));


//Rest: parameter that is used to set up to combine multiple values

function Sum2(a,b,...rest){
    return a+b;
}
console.log(Sum2(...arr));

function SumRest(...rest){
    let sum=0;

    sum = rest.reduce((preval,currVal,index,arr)=>{


        console.log("preval"+preval);
        console.log("currval"+currVal);
        console.log("index"+index);
        console.log("arr"+arr)




        return preval+currVal;

    },0)

    return sum;
}

console.log(SumRest(2,3,4));
console.log(SumRest(...arr));
// function SumRest(...restParams) {
//     let sum = 0;

//     sum = restParams.reduce((prevVal, currVal, index, arr) =>{
//         console.log("prevVal " + prevVal)
//         console.log("currVal " + currVal)
//         console.log("index " +index)
//         console.log("Array " + arr)
//         console.log("Next Iteration....... ")
//         return prevVal + currVal
//     }, 0)

//     return sum;
// }