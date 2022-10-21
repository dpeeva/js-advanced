function solve(cards) {

    const getCard = (face, suit) => {
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

    let result = []

    for (const c of cards) {
        const face = c.slice(0, -1) // gets range, from 0 to {last char minus 1}
        const suit = c.slice(-1) // gets {last char minus 1}

        try {
            const card = getCard(face, suit)
            result.push(card)
        } catch (error) {
            result = [`Invalid card: ${c}`]
        }
    }

    console.log(result.join(" "))
}

solve(['AS', '10D', 'KH', '2C']) // A♠ 10♦ K♥ 2♣
solve(['5S', '3D', 'QD', '1C']) // Invalid card: 1C