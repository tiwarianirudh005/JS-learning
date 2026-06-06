//ques.1 sum values in object arrays  i/o ={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }  o/p =

function findsum(arr){
    let sum = 0;

    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let expenses = {
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
}

let result = {};

result.food = findsum(expenses.food);
result.travel = findsum(expenses.travel);
result.bills = findsum(expenses.bills);

console.log(result);

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