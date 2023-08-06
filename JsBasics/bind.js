var user = {name:"Than le", age: "21", session:"JavaScript",
getDetails:function(params){
    console.log(` ${this.age} ${this.session}`)


    var _this = this;
    setTimeout(function(){
        console.log("Inside set Time out");
        console.log(`${_this.age} ${_this.session}`)
    },2000)
}}

user.getDetails();

