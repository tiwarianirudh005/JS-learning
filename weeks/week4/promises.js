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

// //synchronous readfile
// const fs = require("fs");
// function callback (err, data){
//     if(err){
//         console.log("error while reading the doc.");
//     }else{
//         console.log(data); 
//     }    
// }
// fs.readFile("a.txt", "utf-8", callback);

//asynchronous readfilepromisified

const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {      //promisifiedreadfile blackbox defined callback promise function
    let p = new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
    return p;
}

function callback(data){
    console.log(data);
}
function callbackerr(err){
    console.log("error while reading the file");   
}
let p = fsReadFilePromisified("a.txt","utf-8")
.then(callback)
.catch(callbackerr)

/* calling a promisified function
    
    class promise{
          constructor(fn){
          
          }
          then(){
          
          }
          catch(){ 
          
          }
    }

*/

//callback hell, promises