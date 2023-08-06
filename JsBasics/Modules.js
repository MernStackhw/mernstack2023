var User = {
    name:"Anant",
    address:"usa",
    sessionTraining:"MernStack",
    getUserInfo:function(){
        return{
            name:this.name,
            session:this.sessionTraining
        }
    }
}

var AConst = 3.14313

var User2={
    name:"Mehejabeen",
    adress:"Uk",
    sessionTraining:"MERNstack",
    getUserInfo:function(){
        return{
            name:this.name,
            session:this.sessionTraining
        }
    }

}

module.exports = {User,User2,AConst}