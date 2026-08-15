//assignment for async functions

//q1. write a function that
// 1.reads the content of file 
// 2.trims the extra space from left and right
// 3. write it back to the file 

// code - synchronousfn call approch - it will hault other program which is not good

const fs = require("fs")
function cleanFilesync (filepath , cb){
    let contents = fs.readFileSync("content.txt", "utf-8");
    const trimmedcontents = contents.trim();
    fs.writeFileSync("content.txt", trimmedcontents);
    
}
cleanFilesync("content.txt", cb);

// code - asynchronous fn callback approach- better way to write the program

const fs = require("fs")
function cleanFile(filePath, afterDone) {
    fs.readFile("content.txt","utf-8",function (err , content){
        const trimmedcontent = content.trim();
        fs.writeFile("content.txt", trimmedcontent, function(){
            afterDone();
        });
    });
}
cleanFile("content.txt", function(){
    console.log("done the cleaning!");    
});

//promisified version of this

const fs = require("fs")
function cleanFile(filePath) {
     return new Promise (function(resolve,reject){
        fs.readFile("content.txt","utf-8",function (err , content){
            if(err){
                reject();
            } else {
                const trimmedcontent = content.trim();
                fs.writeFile("content.txt", trimmedcontent, function(){
                    if(err){
                        reject();
                    }else {
                        resolve();
                    }
                });
            }
        });
            
    })   
}
cleanFile("content.txt") 
    .then(function(){
          console.log("file has been cleaned");  
    })
    .catch(function(){
        console.log("error while cleaning the file");
    })

// promise function with async await calling

const fs = require("fs")
function cleanFile(filePath) {
     return new Promise (function(resolve,reject){
        fs.readFile("content.txt","utf-8",function (err , content){
            if(err){
                reject();
            } else {
                const trimmedcontent = content.trim();
                fs.writeFile("content.txt", trimmedcontent, function(){
                    if(err){
                        reject();
                    }else {
                        resolve();
                    }
                });
            }
        });
            
    })   
}

async function main () {
    try {
        await cleanFile("content.txt");
        console.log("file has been cleaned");
        
    } catch (err) {
        console.log("error while cleaning!");
        
    }
}

main();


// WRITE A PROMISIFIED FUNCTION THAT TAKES FILE PREFIX AS AN INPUT 
// AND CLEANS ({PRIFIX1.TXT,{PRIFIX2.TXT}, {PRIFIX3.TXT})

const { log } = require("console");
const fs = require("fs")
function cleanFile(filePath) {
     return new Promise (function(resolve,reject){
        fs.readFile("content.txt","utf-8",function (err , content){
            if(err){
                reject();
            } else {
                const trimmedcontent = content.trim();
                fs.writeFile(filePath, trimmedcontent, function(){
                    if(err){
                        reject();
                    }else {
                        resolve();
                    }
                });
            }
        });
            
    })   
}

async function cleanManyFiles (prefix) {          // ASYNC DUNCTION CALL BE USED ON THE PROMISIFIED FUNCTIONS BUT NOT ON CALLBACKS
            try {
                await cleanFile(prefix + "1.txt");
                await cleanFile(prefix + "2.txt")
                await cleanFile(prefix + "3.txt") 
            }catch(e){
                console.log("error while processing");   
            } 
}

cleanManyFiles ("a") 
    .then(function(){
        console.log("all files are cleaned");    
    })
    .catch(function(){
        console.log("error while cleaning the file");   
    })

    




