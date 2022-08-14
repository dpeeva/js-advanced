function solve(fruit, grams, pricePerKg) {
    const sum = grams / 1000 * pricePerKg
    console.log(`I need $${sum.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80) // I need $4.50 to buy 2.50 kilograms orange.
solve('apple', 1563, 2.35) // I need $3.67 to buy 1.56 kilograms apple.