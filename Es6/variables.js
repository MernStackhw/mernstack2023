/*
Java script is a scripting language, it was called action script
Gradually that 
Server side use of buttons are a very delayed process.
It is very rare that web applications do not use java script 
ES6: It is the standard which every browser needs to or any other platform 
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (
var-functional scoped, hoisted

1. Var is functional scope
, while let and const are block scope 
and do not support hoisiting.
*/
// {//Lexical scope
// var my_var = "new value";
// let my_let = "new let value";
// const my_const = "new const value";
// }

// console.log(my_var);
// console.log(my_let); // let 
// //both are unavailable outside the lexical scope.
// console.log(my_const);// const

/*
initialize and re declare
*/
// var my_var = "new value"; // you can re-intialize and re declare like:-
// var my_var = "Extra value";

// //But you cant do the same with let
// let my_let = "new let value";
// //let my_let = "new let value";
// //but you can re-assign a new value 
// my_let = "new val";

// //But in case of constant you cannot reassign any value to const
// const my_const = "new const value";''
// my_const = "hello";

//console.log(my_const)// assignment to const not allowed

//3. const needs to be assigned a value as soon as it is declared

// var my_var;
// let my_let;
// //const my_const = "new const value"; // you need to assign a value to the constant as soon as it is declared.

// //constants are immutable but their refrences can be changed.

// const user={
//     name: "Jeoffery",
//     session:"Es6"
// }

// //user={name:"Nhi", session:"ES^ 2015"} not allowed

// user.name="Anant";

// console.log(user);

//problesm with functional scope varaible

// for(var index = 1; index<5;index++){
//     setTimeout(
//         ()=>{
//             console.log("Incremented value: "+index)
//         },1000
//     )
// }
// for(let index = 1; index<5;index++){
//     setTimeout(
//         ()=>{
//             console.log("Incremented value: "+index)
//         },1000
//     )
// }

//console.log("Last incremented value: "+ index);

//IFE: Immediately invocable function expression

//using IFE to get the value
for(var index = 1; index<5;index++){

    (function(params){
        setTimeout(
            ()=>{
                console.log("Incremented value: "+params)
            },1000
        )
    })(index)
}

