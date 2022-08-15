function solve(a, b, c, d, e, f) {
    const num = Number(arguments[0])
    const commands = [...arguments].slice(1)

    let result = num
    commands.map(command => {
        if (command === "chop") {
            result = result / 2
        }
        if (command === "dice") {
            result = Math.sqrt(result)
        }
        if (command === "spice") {
            result += 1
        }
        if (command === "bake") {
            result = result * 3
        }
        if (command === "fillet") {
            result = result - result * 0.2
        }
        console.log(result)
    })
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// 16
// 8
// 4
// 2
// 1

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
// 3
// 4
// 2
// 6
// 4.8