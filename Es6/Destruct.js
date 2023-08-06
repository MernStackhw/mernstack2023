//Array destructring
//1. copying info from one array to another
let[firstName,lastname,email]=["Sai","Subraniyam","s_sub@gmail.com"];

console.log(lastname);
console.log(email);

///2. to store multiple values in a variable within an array
let[a,b,c,...d]=[1,2,3,4,5,5,6,6,7,7,87,8];

console.log(d);

//3. swapping values
let x=5,y=6;

[x,y]=[y,x];

console.log(x);

//2. nested destructuring

let student = { stname : "Jason", branch : "Science", subjects : { math : 99, english : 95, chemistry : 96 } }


let { stname, subjects : { math, chemistry, physics = 99} } = student

console.log(stname)
console.log(math)
console.log(chemistry)
console.log(physics)