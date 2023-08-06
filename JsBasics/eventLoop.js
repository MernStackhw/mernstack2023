

console.log("Exec starts")

setTimeout(function name(){
console.log("first callback")

setTimeout(function name(){
    console.log("InnerCall bac")
},0)
},1000)

setTimeout(function name(){
    console.log("Second Call back")
},2000)

setTimeout(function name(){
    console.log("Second Call back")
},3000)

console.log("execution ends")

