//assignment for async functions

//q1. write a function that
// 1.reads the content of file 
// 2.trims the extra space from left and right
// 3. write it back to the file 

// // code - synchronousfn call approch - it will hault other program which is not good
const fs = require("fs")

function cleanFilesync (filepath , cb){
    let contents = fs.readFileSync("content.txt", "utf-8");
    const trimmedcontents = contents.trim();
    fs.writeFileSync("content.txt", trimmedcontents);
    
}

cleanFilesync("content.txt", cb);

// code - asynchronous fn callback approach- better way to write the program

// const fs = require("fs")

// function cleanFile(filePath, cb) {
//     fs.readFile("content.txt","utf-8",function (err , content){
//         const trimmedcontent = content.trim();
//         fs.writeFile("content.txt", trimmedcontent, function(){
//              cb();
//         });
//     });
// }

// cleanFile("content.txt", function(){
//     console.log("done the cleaning!");
    
// });
//promisified versiopn of this

// const fs = require("fs")

// function fsreadfilepromisified("content.txt","utf-8", function(filename, encoding){
//     return new Promise(function (resolve, reject){
//         fs.readFile(filename , encoding , function(err , content){
//             if(err){
//                 reject(err)
//             }else {
//                 resolve(content)
//             }
//         })
//     })
// })






