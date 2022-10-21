function solve(face, suit) {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    const suits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }

    const getFace = (f) => {
        const index = faces.indexOf(f)
        if (index !== -1) {
            return f
        }
        throw new Error("Error")
    }

    const getSuite = (s) => {
        const index = Object.keys(suits).indexOf(s)
        if (index !== -1) {
            return suits[s]
        }
        throw new Error("Error")
    }

    const result = {
        face: getFace(face),
        suit: getSuite(suit),
        toString() {
            return this.face + this.suit
        }
    }

    return result
}

console.log(solve('A', 'S').toString()) // A♠
console.log(solve('10', 'H').toString()) // 10♥
console.log(solve('1', 'C').toString()) // Error