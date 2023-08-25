// //Call And Apply
// var user={name:"Anant", Age:24, Height:" 6'4'' "};

// var getUserDetails = function(params){

//     console.log(params);

//     console.log(`
//     Name:${this.name}
//     Age:${this.Age}
//     Height:${this.Height}
//     `)

// }

// getUserDetails.call(user,"Call And Apply");

// var getUserSubject = (params,subject1,subject2,subject3,subject4)=>{

//     console.log(params);

// //     console.log(`
// //     Subject1:${subject1}
// //     Subject2:${subject2}
// //     Subject3:${subject3}
// //     Subject4:${subject4}
// //     `)
// // }

// // getUserSubject.apply(user,["JS","Spring","Java","Kotlin","React"]);


// //Call Back Function:

// var sessionName = "Mernstack";

// function PrintDetails(sessionNumber,topic,stdName){
//     console.log(`Session: ${sessionName}
//     Session: ${this.sessionNumber}
//     Topic: Call Back
//     Name:${this.stdName}
//     `)
// }

// function PrintSession(callBackPrint,stdName){

//     callBackPrint(stdName);

// }

// PrintSession(PrintDetails,"Anant");

var Num = 10;

function A(a){
    return function B(b){
        return function C(c){
            return a+b+c+Num;
        }
    }
}

var a = A(1);
var a1 = a(2);
var a2 = a1(3);

console.log(a);
console.log(a1);
console.log(a2);

var output = A(1)(2)(2);

console.log(output);