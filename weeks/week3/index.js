/*******async js/callbacks/setinterval*********/

// const fs = require("fs");

// function fileReadCallback(err, contents) {
//     console.log(contents);
// }

// fs.readFile("./weeks/jspromises.callbacks(week3)/a.txt", "utf-8", fileReadCallback);

// let s = 0;
// for(let i = 0; i < 100000; i++) {
//     s += i;
// }

// console.log(s);

// clock timer - settimeout

// const a=1;
// const b=2;

// console.log(a);
// console.log(b);

// function callback(){
//   console.log(a+b);
// } 

// setTimeout(callback,3000);

//  TIME CLOCK

let ctr = 0;
function callback() {
    console.log(ctr);
    ctr = ctr + 1;
}

setInterval(callback,1000);

let x=0;
for(let i=0;i<400000000; i++){
    x = x + 1;
}

console.log(x);

//