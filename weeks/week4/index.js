// function sum(a,b){
//     return a+b;
// }

// let ans = sum(1,4);
// console.log(ans);
// console.log(sum(1,4))
  
// let user = {
//     name: "harkirat",
//     age: 22,
//     cities: ["delhi", "gurgaon","jaipur"]
// }

// console.log(user.cities[0]); 

//ques. code the promise class yourself

/******CLASSES********/ 
// in javascrript classes are away to define blueprint for creating object (which are different from the object defined earlier).
// example of classes is the flappy bird game

// class Rectangle {
//     constructor (width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area () {
//         return this.width * this.height;
//     }
//     static impo() {
//         return "i am a rectangle"
//     }
// }

// let r1 = new Rectangle (1,2, "red");
// let r2 = new Rectangle (100,200,"blue");
// console.log(r1.area());
// console.log(r2.area());
// console.log(Rectangle.impo());

/*********inheritance using classes**********/
class Shape {
    constructor(color) {
        this.color = color;
    }
     paint () {
        console.log("painting with this color " + this.color);
    }
} 
class Rectangle extends Shape {
    constructor (width, height, color) {
        super(color)
        this.width = width;
        this.height = height;   
    }
    area () {
        return this.width * this.height;
    }
    perimeter () {
        return 2 * this.width + this.height;
    }
}
class Circle extends Shape {
    constructor (radius, color) {
        super(color)
        this.radius = radius;
    }
    area (){
        return 3.14 * this.radius * this.radius;
    }
    perimeter (){
        return 2 * 3.14 * this.radius;
    }
}
class Square extends Shape {
    constructor (side, color){
        super(color)
        this.side = side;
        
    }
    area(){
        return this.side * this.side;
    }
    perimeter(){
        return 4 * this.side;
    }
}

const r1 = new Rectangle (10, 20, "red");
const c1 = new Circle (40, "grey");
const s1 = new Square (60, "blue");

console.log(s1.area());
console.log(s1.perimeter());
console.log(s1.paint());

console.log(r1.area());
console.log(r1.perimeter());
console.log(r1.paint());

console.log(c1.area());
console.log(c1.perimeter());
console.log(c1.paint());




