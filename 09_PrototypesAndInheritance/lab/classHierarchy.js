function solve() {
    class Figure {
        units = {
            m: 0.01,
            cm: 1,
            mm: 10
        }
        defaultUnit
        constructor(unit = "cm") {
            this.defaultUnit = unit
        }
        get area() { return NaN }
        calcWithUnit(x) {
            return x * this.units[this.defaultUnit]
        }
        changeUnits(unit) {
            if (unit === "m" || "cm" || "mm") {
                this.defaultUnit = unit
            }
        }
        toString() {
            return `Figures units: ${this.defaultUnit}`
        }
    }

    class Circle extends Figure {
        radius = 0
        constructor(r, ...rest) {
            super(...rest)
            this.radius = r
        }
        get area() {
            return Math.PI * Math.pow(this.r, 2)
        }
        get r() {
            return this.calcWithUnit(this.radius)
        }
        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.r}`
            // console.log(`Figures units: ${this.defaultUnit} Area: ${this.area} - radius: ${this.radius}`)
        }
    }

    class Rectangle extends Figure {
        width = 0
        height = 0
        constructor(w, h, ...rest) {
            super(...rest)
            this.width = w
            this.height = h
        }
        get w() {
            return this.calcWithUnit(this.width)
        }
        get h() {
            return this.calcWithUnit(this.height)
        }
        get area() {
            return this.w * this.h
        }
        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.w}, height: ${this.h}`
            // console.log(`Figures units: ${this.defaultUnit} Area: ${this.area} - width: ${this.width}, height: ${this.height}`)
        }
    }

    return {
        Figure: Figure,
        Circle: Circle,
        Rectangle: Rectangle
    }
}

let classes = solve()
let Figure = classes.Figure
let Rectangle = classes.Rectangle
let Circle = classes.Circle


let c = new Circle(5)
console.log(c.area) // 78.53981633974483
console.log(c.toString()) // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm')
console.log(r.area) // 1200 
console.log(r.toString()) //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm')
console.log(r.area) // 12
console.log(r.toString()) // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm')
console.log(c.area) // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50