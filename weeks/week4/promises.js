// PROMISE CLASS *IMP
// PROMISIFIED SYNTAX FOR THE ASYNCHRONOUS PROGRAM
// CALLBACK VERSION - SETTIMEOUT(CALLBACK, 3000);
//PROMISIFIED VERSION - setTimeoutpromisified(3000).then(callback)

//using a function to return a promise

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(){
//     console.log("hi there");
    
// }
// setTimeoutPromisified(3000).then(callback) //asynchronous promisified callback

// setTimeout(callback,3000); //synchronous

const fs = require("fs");
function callback (err, data){
    if(err){
        console.log("error while reading the doc.");
    }else{
        console.log(data); 
    }    
}
fs.readFile("a.txt", "utf-8", callback);

