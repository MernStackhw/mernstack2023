//Acct acctObj = new Acct(); //Obj accObj is a refrence to the Acct class which is undefined yet

var User = {
    Name: "Ankit",
    Age: 22,
    Session: "MernStack",
    getUserDetails:function(params){
        return{
            Name: this.Name,
            Session: this.Session,
            Address: this.Address
        }
    }

}

User.Address = "Somewhere on Earth";

//console.log(User.getUserDetails());


//OverLoading is not available in JavaScript but Overriding is possible

//var Engineer = new Object(User);

// Correct Way to inherit:

var Engineer = Object.create(User);

Engineer.Speciality = "Mechanical Engineer";

//console.log(Engineer.Session);
//console.log(Engineer.getUserDetails());

Engineer.Name = "Anant SIngh";
Engineer.getSpecialityAndAdress = function(param){
    return{
        Speciality: this.Speciality,
        Address: this.Address,
        Name: this.Name

    }
}
//console.log(Engineer.getSpecialityAndAdress());

/*
var obj1 = {name: "Anant", add1: "Lake City 1"}
var obj2 = {name: "Anant", add1: "Lake City 2"}
var obj3 = {name: "Anant", add1: "Lake City 3"}

//var actualObj = {obj1,obj2,obj3}

obj1.Session = "Object Session "  // copying of data// mutability.//you are able to change the value in the new object even after declaration

console.log(actualObj)

var actualObj2;
var actualObj = Object.assign(actualObj2,obj1,obj2,obj3);

console.log(actualObj2); */

var obj1 = { name: "Anant", add1: "Lake City 1" };
var obj2 = { name: "Anant", add1: "Lake City 2" };
var obj3 = { name: "Anant", add1: "Lake City 3" };

// Combine the objects into a new object
var actualObj = Object.assign({}, obj1, obj2, obj3);

// Add a new property "Session" to the object obj1
obj1.Session = "Object Session";

console.log(actualObj);
