//5. Object.Assign

// var obj1 = {name : "Anant", add1 : "Lake City 1"}

// var obj2 = {name : "Anant", add2 : "Lake City 2"}

// var obj3 = {name : "Anant", add3 : "Lake City 3"}

// var actualObj = {obj1, obj2, obj3}

// obj1.session = "Object Session" //copying of data //mutability

// console.log(actualObj)

// var actualObj2 = {};
// Object.assign(actualObj2, obj1, obj2, obj3) //object creation

// //this preserves immutability
// obj1.session2 = "Session 2 on object"
// console.log(actualObj2)

//5. Object.Assign

var obj1 = {name : "Anant", add1 : "Lake City 1"}

var obj2 = {name : "Dhruv", add2 : "Lake City 2"}

var obj3 = {name : "Revant", add3 : "Lake City 3"}

var actualObj = {obj1, obj2, obj3}

console.log(actualObj);
var actualObj2 = {};
Object.assign(actualObj2,obj1,obj2,obj3);

console.log(actualObj2);