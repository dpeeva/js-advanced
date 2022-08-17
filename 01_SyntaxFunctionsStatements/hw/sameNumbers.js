function solve(n) {
    const digits = String(n).split("").map(Number)
    const firstDigit = digits[0]
    let equal = true
    digits.map(digit => {
        if (digit !== firstDigit) {
            equal = false
            return
        }
    })
    console.log(equal)
    console.log(digits.reduce((a, b) => a + b, 0))
}

solve(2222222)
// true
// 14

solve(1234)
// false
// 10