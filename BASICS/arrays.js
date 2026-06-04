/******ARRAYS*******/
//example of an array
// let users = ["anirudh", "harkirat", "sukhman"];
// console.log(users[1]);

// large arrays for running all the units
// let users = ["anirudh", "harkirat", "sukhman" ,'harpreet', 'manpreet', 'simran', 'gagan', 'navjot', 'prabhjot', 'balpreet'];
//modern javascript for loop
// for(const user of users){
//     console.log(user);
// }

// for (let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }

// for (let i = 0; i <=10 ; i++){  
//     console.log(users[i]);
// }

// combining arrays in object for multiple datas

// function isLegal(user) { 
//     if (user.age >= 18) {
//         console.log(user.name + " is allowed to vote");
//     } else {
//         console.log(user.name + " is not allowed to vote");
//     }
// }

// var users = [
//     {
//         name: "harkirat",
//         age: 33,
//         password: "23random"
//     },
//     {
//         name: "raman",
//         age: 33,
//         password: "23random"
//     },
//     {
//         name: "kirat",
//         age: 6,
//         password: "23random"
//     }
// ];

// // for (var i = 0; i < 3; i++) {
// //     isLegal(users[i]);
// // }

// for (const user of users) {
//     isLegal(user);
// }

//having array of objects inside an array of objects

// function isLegal(user) { 
//     if (user.age >= 18) {
//         console.log(user.name + " is allowed to vote");
//     } else {
//         console.log(user.name + " is not allowed to vote");
//     }
// }

// var users = [
//     {
//         name: "harkirat",
//         age: 33,
//         password: "23random",
//         address: [
//             {
//                 city: "chandigarh",
//                 state: "punjab",
//                 country: "india"
//             },
//             {
//                 city: "chennai",
//                 state: "tamil nadu",
//                 country: "india"
//             }
//         ]
//     },
//     {
//         name: "raman",
//         age: 33,
//         password: "23random",
//         addrsess: []
//     },
//     {
//         name: "kirat",
//         age: 6,
//         password: "23random",
//         addrsess: []
//     }
// ];

// console.log(users[0].address[1].city);
// console.log(users[0].address[0].city);
// console.log(users[1].name);

// ques: create a function that takes an array of objects as input and returns an array of names of users who are above 18 years old and male
 
function islegal(users) {
    if (users.age>=18 && users.gender ==="male") {
        return users.name;
    }else{
        return null;
    }
}

let users = [{
    name: "harkirat",
    age: 33,
    gender: "male"
},
{
    name: "raman",
    age: 13,
    gender: "male"
},
{
    name: "monica",
    age: 20,
    gender: "female"
},
{
    name: "zina",
    age: 6,
    gender: "female"    
}]

for (let i=0; i<users.length; i++){
    console.log(islegal(users[i]));
}

