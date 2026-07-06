// maps,filter,arrowfns


//1. Normal Function
// function sum(a, b) {
//     return a + b;
// }

// const ans = sum(1, 2);
// console.log(ans);

// 2. Arrow Function (Modern Way)
// const sum = (a, b) => {
//     return a + b;
// };

// const ans = sum(1, 2);
// console.log(ans);

// 3. Express Example

// Traditional function:

// app.get("/", function (req, res) {

// });

// Arrow function:

// app.get("/", (req, res) => {

// });


// MAP -- Problem Given an array, create a new array where every value is multiplied by 2.
//Input:[1, 2, 3, 4, 5]
//Output:[2, 4, 6, 8, 10]

//Better Way (Using map) Method 1
// const input = [1, 2, 3, 4, 5];

// function transform(i) {
//     return i * 2;
// }

// const ans = input.map(transform);

// console.log(ans);

// Output:
// [2, 4, 6, 8, 10]

//Method 2 (Anonymous Function)
// const input = [1, 2, 3, 4, 5];

// const ans = input.map(function (i) {
//     return i * 2;
// });

// console.log(ans);

// Output:
// [2, 4, 6, 8, 10]

//Method 3 (Arrow Function)

// const input = [1, 2, 3, 4, 5];
// const ans = input.map((i) => {
//     return i * 2;
// });
// console.log(ans);

// map() is mainly used for transforming an array.It does not modify the original array.It returns a new array.
// General syntax
// const newArray = array.map((element) => {
//     return transformedElement;
// });

//filter function logic

//given an input arr give me back the even values

// const arr = [1,2,3,4,5];

// const ans = arr.filter(function (n){  //anonymous functions are used in filter fuctions 
//     if (n%2 == 0){
//         return true;
//     } else{
//         return false;
//     }
// });

// console.log(ans);

//now arrow functions only difference is of the syntax

const arr = [1,2,3,4,5];
const ans = arr.filter((n) => {  //anonymous functions are used in filter fuctions 
    if (n%2 == 0){
        return true;
    } else{
        return false;
    }
});

console.log(ans);