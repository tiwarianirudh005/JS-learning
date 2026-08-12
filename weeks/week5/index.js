//// async function 

// const fs = require("fs");

// fs.readFile("b.txt","utf-8",function(err,data){
//     if(err){
//         console.log("error while fetching the file");
//     }
//     else{
//         console.log(data);
//     }
// })

////promise black box

// const myPromise = new Promise ((resolve,reject) => {
//    let success = true;

//    if(success) {
//     resolve("Operation successful!");
//    } else {
//      reject("Operation failed.");
//    }
// });

//// imp interview questions

//// create a promisified version of fs.readFile
//// create a promisified version of setTimeout
//// create a promisified version of fs.writeFile

// // on top of fs.readFile

// // const fs = require("fs");

// // function fsReadFilePromise(filename,encoding) {
// //     return new Promise(function(resolve,reject){
// //         fs.readFile(filename,encoding,function(err,data){
// //             if(err) {
// //                 reject(err)
// //             }else{
// //                 resolve(data)
// //             }
// //         })
// //     });
// // }
// // fsReadFilePromise("a.txt","utf-8")  
// //     .then(function(data){
// //         console.log(data);
// //     })
// //     .catch(function(err){
// //         console.log("error while reading file");
// //     })

// // // settimeout promisified

// // function setTimeoutPromisified(delay){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             resolve()
// //         },delay)
// //     })
// // }

// // setTimeoutPromisified(1000)
// //     .then(function(){
// //         console.log("1 second delay in run");
// //    })
// //    .catch(function(){
// //        console.log("an error came");     
// //    })
// //    .finally(function(){
// //        console.log("finally after then or catch");
// //    })

// // //promisified version of fs.writefile

// //async/await syntax- mutable functions

// // async function run{
// //     try{
// //         const result = await myPromise;
// //         console.log(result);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // run();

// // lets use async await for reading multiple promisified file reading

// const fs = require("fs");

// function fsreadfilepromisified(filepath , encoding){
//     return new Promise (function(resolve,reject) {
//         fs.readFile(filepath , encoding , function(err,data){
//             if(err){
//                 reject("file was not read")
//             } else {
//                  resolve(data)
//             }     
//         })       
//     })
// }

// //TWO WAYS TO CALL THE MULTIPLE FUNCTIONS - 
// // 1. UGLY 

// // function main(){
// //     fsreadfilepromisified("b.txt", "utf-8")
// //         .then(function(data){
// //             console.log(data);
// //             fsreadfilepromisified("c.txt", "utf-8")
// //                 .then(function(data){
// //                     console.log(data);
// //                     fsreadfilepromisified("d.txt", "utf-8")
// //                         .then(function(data){
// //                             console.log(data);
// //                         })
// //                         .catch(function(err){
// //                             console.log(err);
                            
// //                         })
// //                 })
// //                 .catch(function(err){
// //                     console.log(err);           
// //                 })
// //         })
// //         .catch(function(err){
// //              console.log(err);           
// //          })
// // }

// // main();

// // 2. PRETTY - with async await

// async function main(){

//     let filecontent1 = await fsreadfilepromisified("b.txt", "utf-8");    // if the await function will not be used the promise will remain pending
//     let filecontent2 = await fsreadfilepromisified("c.txt", "utf-8");
//     let filecontent3 = await fsreadfilepromisified("d.txt", "utf-8")

//     console.log(filecontent1);
//     console.log(filecontent2);
//     console.log(filecontent3);
    
// }

// main();

//three category of function call
// 1. callback based async function - fs.readfile,fs.writefile,and settimeout
// 2. promises with .then/.catch and,finally syntax
// 3. async await syntax 
