/*
Java Script basics:

Types of data: 

Primitives:
1. Boolean
2. Null
3. Undefined
4. String
5. Symbol(new in ES6)
6. Number

Non-primitive:
-Object

*/

var sessionName = "MernStack2023", month = "January"

console.log("Session: " + sessionName);
console.log("Mont: "+month);

function PrintSession(sessionName){
    console.log(sessionName);
};

var session = "Anant's Session"

console.log(PrintSession(session));
