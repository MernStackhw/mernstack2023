

// Nesting fucntions and js currying
var sessionName = "mernStack"

function printSession(sessionNumber,studentName){
console.log(`Printing callBack function:- ${sessionNumber} ${sessionName} ${studentName}`);
}

function GetDetails(callbackPrint,sessionNumber,studentName){
    callbackPrint(1,studentName);
    
}

//GetDetails(printSession, 1, "David");
//GetDetails(printSession, 2, "Jeoffery");

var number1 = 20;
function A(a){
    
    return function B(b){

        return function C(c){
        
            return function D(d){
                return a + b + c +d + number1;


            }
        }
    }

}

//\*
/*
Doubt
*/

var _a = A(1);
var _b = _a(2);
var _c = _b(3);
var _d = _c(4);
//console.log(_d);
//console.log(_c);
//chain execution:

var output = A(1)(2)(3)(4);

console.log(output)