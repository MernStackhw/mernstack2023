//Q1
console.log("Hello world!");

var a = 10, b = 20;

console.log(a+b);


function displayName(params){
    console.log(params);
}

console.log(displayName("Anant"));

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
var User = {
    Name: "Ashish",
    Designation: "Trainer",
    email:"training6synergistic@gmail.com",

    getUserDetails:function(){
        
        return{
            Name:this.Name,
            Designation:this.Designation,
            email:this.email,
            Student:"Anant"

        }


    }
}

console.log(User.getUserDetails);
console.log(User.getUserDetails());



function ArraySum(A,B,C,D,E,F){
  console.log(A+B+C+D+E+F);
}

ArraySum.apply(null,[10,20,40,20,10,1]);

var User2 = {name: "Anant", Age:23, Salary:2000};

function GetUserDetails(params){
    console.log(params);

    console.log(`
    Name: ${this.name}
    Age: ${this.Age}
    Designation: Jr Developer
    Salary: ${this.Salary}
    `)
}

GetUserDetails.call(User2,"Basics");

function GetDetails2(params,session1,session2,session3){

    console.log(`
    ${params}
    ${session1}
    ${session2}
    ${session3}
    `)
    console.log(`
    Name: ${this.name}
    Age: ${this.Age}
    Designation: Jr Developer
    Salary: ${this.Salary}
    `)
}

GetDetails2.apply(User2,["Baiscs","JS","Assignment","8/2/2023"])

/*
"Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
*/

var User3 = {
    name:"Robert",
    num:.0266,
    bool:true,
    random:25166665,
    undefined:"undefined",
    bool2:false,
    middleName:"RobertJr",
    app:null,
    brackets:"{}",
    randomVal:-32767,

    getValues:function(){
        return{
            Name:this.name,
            Number1:this.num,
            Boolean1:this.bool,
            Number2:this.random,
            UD:this.undefined,
            Boolean2:this.bool2,
            Name2:this.middleName,
            Application:this.app,
            Brackets:this.brackets,
            Number3:this.randomVal
        }
    }
}

console.log(User3.getValues());

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function doaddition(a,b,c){

    console.log(a+b+c);
}

doaddition(2,3,4); //9
doaddition(2);//NaN // not enough inputs
doaddition(2.3,3);//NaN// No enough inputs
doaddition("first",2,"three");//first2three // it just added the values as string



//Q5. A detailed example implementation of event loop using multiple settimeouts

console.log("Execution Starts!");

setTimeout(function name(){
    console.log("First Call Back")
},1000,
setTimeout(function name(){
    console.log("second Call Back")
},0))

setTimeout(function name(){
    console.log("secind Call Back")
},2000)

setTimeout(function name(){
    console.log("First Call Back")
},3000)

console.log("Exec ends");



//Q6. Print the topics you remember so far exporting it from one file and printing in another

module.exports={User,User2,User3};

//Q7. Give me an example of your choice on closure, callback, prototype, each.

function Parent(Name,Age){
    var name=Name;
    var Age=Age;
    var balance = 600;
    var accpwd=890;
    
}