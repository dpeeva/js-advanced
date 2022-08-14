function solve(a, b) {
    const max = Math.max(a, b)
    let gcd = 1
    for (let i = 2; i < max; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i
        } else {
            continue
        }
    }
    console.log(gcd)
}

solve(15, 5) // 5
solve(2154, 458) // 2