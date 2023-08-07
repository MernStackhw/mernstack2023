//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 
let StudentTest = {
    firstname : "Anant",
    address : "usa",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

let{firstname,lastname="Singh",address,sessionTopics:{covered1,covered2,covered3="ES6"}} =StudentTest;

console.log(firstname);
console.log(lastname);
console.log(address);
console.log(covered1);
console.log(covered2);
console.log(covered3);

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(a,b,c){
    const result = a*b*c;

    if(a==null || b==null || c==null){
        return 0;
    }
    return result;
}

console.log(multiply());
console.log(multiply(5,10,20));

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let arr = [1,2,3,4,5];

arr[6]=8;

//for of(iterating over property values)
for(const key of arr){
    console.log(key);

    const array = arr[key];
    console.log(array)
}

//for in(iterating over property names)

for(const key in arr){
    console.log(key);
}


//create an example of const where we can update on property of the object, where it says const is mutable

const constantUser = {Name:"Anant",Lname:"Singh",Designation:"Senior Developer",Sal:"$80000"};

constantUser.Sal="const is mutable"

console.log(constantUser);

