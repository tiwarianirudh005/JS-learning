class Rectangle {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area () {
        return this.width * this.height;
    }
    static impo() {
        return "i am a rectangle"
    }
}

let r1 = new Rectangle (1,2, "red");
let r2 = new Rectangle (100,200,"blue");
console.log(r1.area());
console.log(r2.area());
console.log(Rectangle.impo());