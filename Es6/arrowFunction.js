//Arrow Function: It is an easy and shorter way of defining functions
//resolves the context of a function by copying context of immediate parent

function sum(a,b){
    return a+b;
}

console.log(sum(5,5));

let Addarrow = (a=0,b=0)=> a+b;

console.log(Addarrow(2,3))

let User={
    name:"Anant",
    Age:24,
    Class: "MernStack",

    getUserDetails:function(){
            setTimeout(()=>{
            console.log(`${this.name}
            ${this.Age}
            ${this.Class}`)
            },2000);}
        
    
}

User.getUserDetails();
