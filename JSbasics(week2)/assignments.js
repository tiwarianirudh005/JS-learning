//ques.1 sum values in object arrays  i/o ={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }  o/p =

// function findsum(arr){
//     let sum = 0;

//     for (let i=0; i<arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let expenses = {
//     food: [10, 20, 30],
//     travel: [5, 15],
//     bills: [40, 60]
// }

// let result = {};

// result.food = findsum(expenses.food);
// result.travel = findsum(expenses.travel);
// result.bills = findsum(expenses.bills);

// console.log(result);

// now with different data { food: [15, 25, 35], travel: [10, 20], bills: [50, 70] }

// function findsum(arr){
//     let sum = 0;

//     for (let i=0; i<arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// expenses = {
//     food:[15,25,35],
//     travel:[10,20],
//     bills:[50,70]   
// }

// let result = {};

// result.food = findsum(expenses.food);
// result.travel = findsum(expenses.travel);
// result.bills = findsum(expenses.bills);

// console.log(result);        // assignment 1 completes

// ques.2 Count word occurrences in array , i/p = ["apple", "banana", "apple", "orange", "banana", "apple"]  o/p = { apple: 3, banana: 2, orange: 1 }


// Count the word occurrence in array
// function countOcc(arr,word) {

//     let occurrence = 0;

//     for ( let i = 0; i < arr.length; i++) {
//         if (arr[i] === word){
//             occurrence++;
//         }
//     }

//     return occurrence;
// }

// let input = 
//        ["apple","banana","apple","orange","banana","apple"];


// let wordCount = {};

// wordCount.apple = countOcc(input, "apple");
// wordCount.banana = countOcc(input, "banana");
// wordCount.orange = countOcc(input, "orange");

// console.log(wordCount);

// // ques.3 swap keys and values in object

// // I/P: { a:"x", b:"y", c:"z"} ; O/P: { x:"a", y:"b", z:"c"}

// function swapKeysValues(obj) {
//     let newObj = {};

//     let keys = Object.keys(obj);

//     for (let i = 0; i < keys.length; i++) {

//         let key = keys[i];

//         newObj[obj[key]] = key;
//     }

//     return newObj;
// }

// let input = {
//     a: "x",
//     b: "y",
//     c: "z"
// };

// console.log(swapKeysValues(input));

// ques.4 find the largest value key i/o: { a:10, b:50, c:20 }

// function findLargestKey(obj) {

//     let keys = Object.keys(obj);

//     let largestKey = keys[0];

//     for (let i = 1; i < keys.length; i++) {

//         if (obj[keys[i]] > obj[largestKey]) {
//             largestKey = keys[i];
//         }

//     }

//     return largestKey;
// }

// let input = {
//     a: 10,
//     b: 50,
//     c: 20
// };

// console.log(findLargestKey(input));

//ques5 Flatten object of arrays into one array

// function mergedarr(obj){
//     let result = [];
//     let keys = Object.keys(obj);

//     for(let i=0; i< keys.length; i++){
//         let key = keys[i];

//         for(let j=0; j < obj[key].length; j++){
//             result.push(obj[key][j]);
//         }
//     }
//     return result;
// }

// let input = { 
//     fruits: ["apple", "banana"], 
//     veggies: ["carrot", "pea"] 
// }

// console.log(mergedarr(input));

//ques6. Group people by city - Input: [ { name: "A", city: "Delhi" }, { name: "B", city: "Mumbai" }, { name: "C", city: "Delhi" } ] - Output: { Delhi: ["A", "C"], Mumbai: ["B"] }

function groupbycity(people){
    let result = {};
     
    for(let i=0; i<people.length; i++){
        let city = people[i].city;
        let name = people[i].name;
        if(!result[city]){
            result[city] = [];
        }
        result[city].push(name);
    }
    return result;
}

let people = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }

]

console.log(groupbycity(people));
