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

// on top of fs.readFile

const fs = require("fs");

function fsReadFilePromise(filename,encoding) {
    return new Promise(function(resolve,reject){
        fs.readFile(filename,encoding,function(err,data){
            if(err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    });
}
fsReadFilePromise("a.txt","utf-8")  
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log("error while reading file");
    })

// settimeout promisified


