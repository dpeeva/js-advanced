function solve(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    if (startIndex < 0) {
        startIndex = 0 // clamping technique
    }
    const len = arr.length
    if (endIndex > len - 1) {
        endIndex = len - 1
    }
    let sum = 0
    for (let index = startIndex; index <= endIndex; index++) {
        sum += Number(arr[index])
    }
    // check if is decimal
    if (sum % 1 !== 0) {
        // trim trailing zeroes
        sum = Number(sum.toFixed(2))
    }
    return sum
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300)) // 150
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)) // 3.3
console.log(solve([10, 'twenty', 30, 40], 0, 2)) // NaN
console.log(solve([], 1, 2)) // 0
console.log(solve('text', 0, 2)) // NaN