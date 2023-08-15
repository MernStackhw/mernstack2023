//callbacks and cakkbacks, the function becomes full of callbacks

// function SignInSignupUser(authCallback,authorizationCallbk,navigationsCallbk){
//     let session=Authentication(username,password)

//     if(session==IsValid){
//        // let permission = Authorization(user,session)

//        let permissionPromisObject = new Promise(resolve,reject)=>{
//         let permission = Authorization(user,session)
//         if(permission.status==sucess){
//             return resolve(permission)
//         }
//         else{
//             return("No response")
//         }
//        }

//     }
// }


let LunchPromise = new Promise((reject,resolve)=>{

    setTimeout(()=>{

        resolve({
            "Planned":"Yes",
            "Status":"Success",
            "Status Code":200
        })

    },2000);

    setTimeout(()=>{
        reject({

            "Planned":"Yes",
            "Status":"Failed",
            "Code:":500
        })
    },3000)

})

console.log("PromiseStatus: "+LunchPromise.then);
//console.log();

LunchPromise.then((data)=>{
    console.log(data)
}).catch((err)=>{
console.log(err)
})

console.log("Promise Complete");