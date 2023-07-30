var user = {name:"Than le", age: "21", session:"JavaScript"}
var user2 = {name:"Liam le", age:20, session:"OOJS"}

/*
function GetUserDetails(concept){

    console.log(`Call Extension- ${concept}`)
    console.log(`The User Details are as below: 
        Name is- ${this.name}
        Age- ${this.age}
        Session- ${this.session}
    ` )
}

*/
//GetUserDetails("params") // this takes global scope.

//In call we use the first parameter as the scope of the function and then the variables of the fucntions
// GetUserDetails.call(user, "Basic JS concept");
// GetUserDetails.call(user2,"Advance JS concept") 

function GetUserDetails(concept, session1, session2, session3, session4, session5){

    console.log(`${session1}, ${session2}, ${session3}, ${session4}, ${session5}`)
    console.log(`Call Extension- ${concept}`)
    console.log(`The User Details are as below: 
        Name is- ${this.name}
        Age- ${this.age}
        Session- ${this.session}
    ` )
}

// apply is used when there is an array of parameters

GetUserDetails.apply(user2, ["Js", "es6", "nodejs", "express", "react"]);


setTimeout(function Sum(){
   console.log(1+2+3+4);
},3000)

