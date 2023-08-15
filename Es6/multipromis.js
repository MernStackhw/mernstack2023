
let getUserDetails = new Promise((resolve,reject)=>{
    resolve({

        "status":"Success"

    })
})

let getAccountDetails = new Promise((resolve,reject)=>{
    resolve({"status":"success"})
})

let Authentication = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        reject({

            "Status":"Failure"

        })

    },0)
})

console.log("Promises at work:")

Promise.allSettled([getAccountDetails, getUserDetails, Authentication])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });