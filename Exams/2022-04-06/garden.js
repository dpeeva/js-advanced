class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        } else {
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            })
            this.spaceAvailable = this.spaceAvailable - spaceRequired
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        const plantIndex = this.plants.findIndex(p => p.plantName == plantName)
        if (plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (this.plants[plantIndex].ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        this.plants[plantIndex].ripe = true
        this.plants[plantIndex].quantity = this.plants[plantIndex].quantity + quantity

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }
        if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        const plantIndex = this.plants.findIndex(p => (p.plantName === plantName))
        if (plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } else {
            if (this.plants[plantIndex].ripe == false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
            } else {
                const quantity = this.plants[plantIndex].quantity
                const spaceRequired = this.plants[plantIndex].spaceRequired
                this.plants = [...this.plants.slice(0, plantIndex), ...this.plants.slice(plantIndex + 1)]
                this.storage.push({
                    plantName,
                    quantity
                })
                this.spaceAvailable = this.spaceAvailable + spaceRequired
                return `The ${plantName} has been successfully harvested.`
            }
        }
    }

    generateReport() {
        const report = [`The garden has ${this.spaceAvailable} free space left.`]
        const plants = this.plants.sort((a, b) => a.plantName - b.plantName)
        report.push(`Plants in the garden: ${plants.map(p => p.plantName).join(", ")}`)
        if (this.storage.length === 0) {
            report.push("Plants in storage: The storage is empty.")
        } else {
            const plantsInStorage = this.storage.map(p => `${p.plantName} (${p.quantity})`)
            report.push(`Plants in storage: ${plantsInStorage.join(", ")}`)
        }
        return report.join("\n")
    }
}

/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20))
console.log(myGarden.addPlant('orange', 200))
console.log(myGarden.addPlant('olive', 50))

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// Uncaught Error Error: Not enough space in the garden.
*/

/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20))
console.log(myGarden.addPlant('orange', 100))
console.log(myGarden.addPlant('cucumber', 30))
console.log(myGarden.ripenPlant('apple', 10))
console.log(myGarden.ripenPlant('orange', 1))
console.log(myGarden.ripenPlant('orange', 4))

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The orange is already ripe.
*/

/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20))
console.log(myGarden.addPlant('orange', 100))
console.log(myGarden.addPlant('cucumber', 30))
console.log(myGarden.ripenPlant('apple', 10))
console.log(myGarden.ripenPlant('orange', 1))
console.log(myGarden.ripenPlant('olive', 30))

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: There is no olive in the garden.
*/

/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20))
console.log(myGarden.addPlant('orange', 100))
console.log(myGarden.addPlant('cucumber', 30))
console.log(myGarden.ripenPlant('apple', 10))
console.log(myGarden.ripenPlant('orange', 1))
console.log(myGarden.ripenPlant('cucumber', -5))

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The quantity cannot be zero or negative.
*/

/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20))
console.log(myGarden.addPlant('orange', 200))
console.log(myGarden.addPlant('raspberry', 10))
console.log(myGarden.ripenPlant('apple', 10))
console.log(myGarden.ripenPlant('orange', 1))
console.log(myGarden.harvestPlant('apple'))
console.log(myGarden.harvestPlant('olive'))

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: There is no olive in the garden.
*/

/*
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20))
console.log(myGarden.addPlant('orange', 200))
console.log(myGarden.addPlant('raspberry', 10))
console.log(myGarden.ripenPlant('apple', 10))
console.log(myGarden.ripenPlant('orange', 1))
console.log(myGarden.harvestPlant('apple'))
console.log(myGarden.harvestPlant('raspberry'))

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: The raspberry cannot be harvested before it is ripe.
*/


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20))
console.log(myGarden.addPlant('orange', 200))
console.log(myGarden.addPlant('raspberry', 10))
console.log(myGarden.ripenPlant('apple', 10))
console.log(myGarden.ripenPlant('orange', 1))
console.log(myGarden.harvestPlant('orange'))
console.log(myGarden.generateReport())

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)