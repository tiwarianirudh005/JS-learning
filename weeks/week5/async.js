//assignment for async

//q1. write a function that
// 1.reads the content of file 
// 2.trims the extra space from left and right
// 3. write it back to the file 

// code - synchronous approch
const fs = require("fs")
let contents = fs.readFileSync("content.txt", "utf-8");
const trimmedcontents = contents.trim();
fs.writeFileSync("content.txt", trimmedcontents);






