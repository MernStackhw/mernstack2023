//for in loop: iterates oger the property value for the json objects with key values

// let person ={fname:"John",lname:"Buttwoski", age:"24"};
// for(const key in person){
//     console.log(key);
//     const element=person[key];
//     console.log(element);
// }

let arr=[2,3,4,5,69];

for(const key in arr){
    console.log(key);
    console.log(arr[key]);
} //suitable for objects


//for off: iterates over the property nams, for arrays, more for numbers or strings 

console.log("For off loop");

let cars=['bmw','Volvo','Mustang'];

cars[3]="Suzuki800";

for(const car of cars){
    console.log(car);
}