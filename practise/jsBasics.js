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

// var Num = 10;

// function A(a){
//     return function B(b){
//         return function C(c){
//             return a+b+c+Num;
//         }
//     }
// }

// var a = A(1);
// var a1 = a(2);
// var a2 = a1(3);

// console.log(a);
// console.log(a1);
// console.log(a2);

// var output = A(1)(2)(2);

// console.log(output);

//Closures:

/*
*Encapsulation:
*/

// function Parent(name,age){

//     var _name = name;
//     var _age = age;
//     var accBalance = 500;
//     var accPwd = 7890;

//     function child(accno,accPwd){
//         return{

//             Name:_name,
//             Age:_age,
//             AccBalance:accBalance,

//         }
//     }
//     return child;
// }

// var acct = Parent("Anant",23);
// console.log(acct(590,7890));


//Objects:

// var User = {
//     Name:"Anant",
//     Age:24,
//     Class:"Mern",

//     getUserDetails:function(){

//         return{
//             Name:this.Name,
//             Age:this.Age,
//             Class:this.Class
//         }

//     }
// }


// //console.log(User.getUserDetails());

// var Engineer = Object.create(User);

// Engineer.Name = "Ankit";

// Engineer.Speciality = "Mechanical"

// Engineer.getAddressandSpeciality = function(){
//     return{
//         Speciality:this.Speciality,
//         Address: "someWhereInUsa"
//     }
// }

// //console.log(Engineer.getAddressandSpeciality());

// var obj1 = {Name:"Anant",Age:24}
// var obj2 = {Name:"Shradesh",Age:22}
// var obj3 = {Name:"Rishab",Age:20}

// var target = {Name:this.Name, Age:this.Age};
// var actualObj = Object.assign({},obj1,obj2,obj3);


// //console.log(target);

// console.log(actualObj);