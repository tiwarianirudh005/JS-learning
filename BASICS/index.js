//assignments
// variables
// let favcolor = "white";
// let height = "179cm";
// let likespizza = true;

// console.log(favcolor);
// console.log(height);
// console.log(likespizza);

/****Functions****/

//eg three person different greatings

// function greet(name) {
//     console.log("Hello " + name );
//     console.log("nameste" + name);
//     console.log("kiwean singh"+ name);
// }

// let name1 = "anirudh";
// let name2 = "harkirat";
// let name3 = "sukhman";

// greet(name1);
// greet(name2);
// greet(name3);

// another example of age eligibility

// function islegal(age) {
//     if(age >= 18){
//          console.log("eligible to vote");
//     }
//     else{
//          console.log("not eligible to vote");
//     }
// }

// islegal(60)
// islegal(12)

/**LOOPS**/


// function islegal(age) {        //for loop
//     if(age >= 18){
//          console.log("eligible to vote");
//     }
//     else{
//          console.log("not eligible to vote");
//     }
// }

// for (let i = 0; i < 100; i++){
//     islegal(i);
// }

// function islegal(age) {        //while loop
//     if(age >= 18){
//          console.log("eligible to vote");
//     }
//     else{
//          console.log("not eligible to vote");
//     }
// }

// let j=0;
// while (j<100){
//     islegal(j);
//     j++;
// }

/*****COMPLEX DATATYPES*****/

// OBJECTS

function islegal(user) {       
    if(age >= 18){
         console.log(user.name + " allowed to vote");
    }
    else{
         console.log(user.name + " not allowed to vote");
    }
}
var user1 = {
    name: "anirudh",
    age: 9,
    password: "nfjine",
    // address:{
    //     city: "chandigarh",
    // },
    // metadata: {
    //     likes: "girls"
    // }
}   
var user2 = {
    name: "harkirat",
    age: 29,
    password: "vjrnjit",
    // address:{
    //     city: "jaipur",
    // },
    // metadata: {
    //     likes: "pizza"
    // }
}  

islegal(user1.name, user1.age);
islegal(user2.name, user2.age);




 


