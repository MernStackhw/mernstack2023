
//we have 99000+ packages in node js which we use for various tasks
//console.log() is to log information

// const{log} = require("console");

// const os=require('os')
// const path=require('path')
// const v8 = require("v8")
// //log(path)
// log(v8);

// //similar to set time out is set interval
// let intervalCounter=1;

// let myInterval = setInterval(()=>{
// intervalCounter++
//     log(`increment value ${intervalCounter}`);
// },500)

const{log}=require("console");

log("Basic Node commands");

const os= require('os');

log(os);

//event emitter - on is custom event
//data - insert data
//callback with data inserted
// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     process.exit();
// })
// process.stdin.on('exit', data =>{
//     log("we are exiting")
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// })

const path = require('path');// to rectify path of a file

const util = require('util');
const v8 = require('v8');// to give acces to v8 engie of the node

util.log(path.basename(__filename));
util.log(path.basename(__dirname));

let intervalCounter = 1;

let myInterval = setInterval(()=>{
    intervalCounter++;
    log(`Increment Value: ${intervalCounter}`)
},5000);