function solve(x1, y1, x2, y2) {
    const getValues = (x1, y1, x2, y2) => {
        // Calculate a and b sides of triangle
        let a = 0
        let b = 0

        // Distance x
        if ((x1 > 0 && x2 < 0) || (x1 > 0 && x2 < 0)) {
            a = Math.abs(x1) + Math.abs(x2)
        } else {
            a = Math.abs(Math.abs(x1) - Math.abs(x2))
        }

        // Distance y
        if ((y1 > 0 && y2 < 0) || (y1 > 0 && y2 < 0)) {
            b = Math.abs(y1) + Math.abs(y2)
        } else {
            b = Math.abs(Math.abs(y1) - Math.abs(y2))
        }

        return [a, b]
    }

    const isValid = (distance) => parseInt(distance) === distance ? "valid" : "invalid"

    // Calculate c (distance), using Pythagorean theorem: c*c = a*a + b*b

    let { a, b } = getValues(x1, y1, 0, 0)
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(Math.sqrt(a * a + b * b))}`)

    let { c, d } = getValues(x2, y2, 0, 0)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(Math.sqrt(c * c + d * d))}`)

    let { e, f } = getValues(x1, y1, x2, y2)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(Math.sqrt(e * e + f * f))}`)
}

solve(3, 0, 0, 4)
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid

solve(2, 1, 1, 1)
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid