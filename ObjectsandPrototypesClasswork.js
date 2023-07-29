var Student = {

    name:"Anant",
    Age:"23",
    DOB: "11/13/1999",

   getUserDetails:function(){

            return{
                name:this.name,
                age:this.Age,
                session:"MernStack",
                Birth_Day:this.DOB
            }

    }


}

//console.log(Student.getUserDetails());

Student.job = "Backend-Developer";

//console.log(Student.job);

var Student2 = {
    name:"Amit",
    Age: 24,
    DOB:"12/8/1998",

    getUserDetails:function(){
        return{
            Name:this.name,
            Age:this.age,
            Session:"SpringBoot",
            Birth_Day: this.DOB
        }
    }
}

//console.log(Student2.getUserDetails());

var Object1 = Object.create(Student);

Object1.name = "Anant"
Object1.Age="23"


var Object2 = Object.create(Student2);

//console.log(Object2.getUserDetails());

var ObjectsFinal = Object.assign({},Object1,Object2);

//console.log(ObjectsFinal);
console.log(ObjectsFinal);