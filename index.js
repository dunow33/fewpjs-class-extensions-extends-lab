class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        let total = 0;

        for(let side of this.sides) {
            total += side;
        }

        return total;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.sides.length !== 3) return;
        
        return ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[2] + this.sides[1] > this.sides[0]));
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.sides.length !== 4) return;
        
        return ((this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]));
    }

    get area() {
        return (this.sides[0] ** 2);
    }
}