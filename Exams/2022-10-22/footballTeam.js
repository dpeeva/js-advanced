class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }

    isAvailable(name) {
        return this.invitedPlayers.findIndex(p => p.name == name)
    }

    sortAscending(arr) {
        return arr.sort((a, b) => (a.name).localeCompare(b.name))
    }

    newAdditions(footballPlayers) {
        const players = footballPlayers.map(p => {
            const data = p.split("/")
            return {
                name: data[0],
                age: data[1],
                playerValue: data[2]
            }
        })
        players.filter(player => {
            const index = this.isAvailable(player.name)
            if (index === -1) {
                this.invitedPlayers.push(player)
            } else {
                if (player.playerValue > this.invitedPlayers[index].playerValue) {
                    this.invitedPlayers[index].playerValue = player.playerValue
                }
            }
        })
        const names = this.invitedPlayers.map(player => player.name)
        return `You successfully invite ${names.join(", ")}.`
    }

    signContract(selectedPlayer) {
        const data = selectedPlayer.split("/")
        const name = data[0]
        const price = data[1]
        const index = this.isAvailable(name)
        if (index === -1) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            if (price < this.invitedPlayers[index].playerValue) {
                const priceDifference = Number(this.invitedPlayers[index].playerValue) - Number(price)
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
            } else {
                this.invitedPlayers[index].playerValue = "Bought"
                return `Congratulations! You sign a contract with ${name} for ${price} million dollars.`
            }
        }
    }

    ageLimit(name, age) {
        const index = this.isAvailable(name)
        if (index === -1) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            const currentAge = Number(this.invitedPlayers[index].age)
            if (currentAge < age) {
                const diff = age - currentAge
                if (diff < 5) {
                    return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
                }
                if (diff > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            } else {
                return `${name} is above age limit!`
            }
        }
    }

    transferWindowResult() {
        const result = ["Players list:"]
        const sortedPlayers = this.sortAscending(this.invitedPlayers.slice())
        sortedPlayers.map(player => {
            result.push(`Player ${player.name}-${player.playerValue}`)
        })
        return result.join("\n")
    }
}

// CASE 1

// let fTeam = new footballTeam("Barcelona", "Spain")
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]))
// 
// // You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.


// CASE 2

// let fTeam = new footballTeam("Barcelona", "Spain")
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]))
// console.log(fTeam.signContract("Lionel Messi/60"))
// console.log(fTeam.signContract("Kylian Mbappé/240"))
// console.log(fTeam.signContract("Barbukov/10"))
// 
// // You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// // Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// // Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// // Uncaught Error: Barbukov is not invited to the selection list!


// CASE 3

// let fTeam = new footballTeam("Barcelona", "Spain")
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]))
// console.log(fTeam.ageLimit("Lionel Messi", 33))
// console.log(fTeam.ageLimit("Kylian Mbappé", 30))
// console.log(fTeam.ageLimit("Pau Torres", 26))
// console.log(fTeam.signContract("Kylian Mbappé/240"))
// 
// // You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// // Lionel Messi is above age limit!
// // Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// // Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// // Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.


// CASE 4

let fTeam = new footballTeam("Barcelona", "Spain")
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]))
console.log(fTeam.signContract("Kylian Mbappé/240"))
console.log(fTeam.ageLimit("Kylian Mbappé", 30))
console.log(fTeam.transferWindowResult())

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52