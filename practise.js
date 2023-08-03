var A = 10;

setTimeout(function(){
    console.log(A)
},0)

setTimeout(
function Summ(){
    console.log(1+2);
},2000);

var User = {
    name:"Anant",
    age: 23,
    position: "Senior Programmer",
    Salary:"$500,000",

    getUserDetails : function(){

        return{
            Name:this.name,
            Age:this.age,
            Designation:this.position,
            Salary:this.Salary,
            Degree:"Computer Science BS"

        }
    }
}


console.log(User.getUserDetails());

module.export=User;