class CarDealership {
    constructor(name) {
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {
        if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!")
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        const carIndex = this.availableCars.findIndex(car => car.model === model)

        if (carIndex === -1) {
            throw new Error(`${model} was not found!`)
        } else {
            const difference = Math.abs(this.availableCars[carIndex].mileage - desiredMileage)
            if (this.availableCars[carIndex].mileage > desiredMileage) {
                if (difference <= 40000) {
                    const price = this.availableCars[carIndex].price * 0.05
                    this.availableCars[carIndex].price = this.availableCars[carIndex].price - price
                } else {
                    const price = this.availableCars[carIndex].price * 0.10
                    this.availableCars[carIndex].price = this.availableCars[carIndex].price - price
                }
            }
            const sold = this.availableCars[carIndex]
            this.soldCars.push({
                model: sold.model,
                horsepower: sold.horsepower,
                soldPrice: sold.price
            })
            this.availableCars = [...this.availableCars.slice(0, carIndex), ...this.availableCars.slice(carIndex + 1)]
            this.totalIncome += sold.price
            return `${model} was sold for ${sold.price.toFixed(2)}$`
        }
    }

    currentCar() {
        if (!this.availableCars.length) {
            return "There are no available cars"
        } else {
            const report = ["-Available cars:"]
            this.availableCars.map(
                car => report.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
            )
            return report.join("\n")
        }
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!")
        } else {
            let cars = []
            if (criteria === "horsepower") {
                // sort in descending order
                cars = this.sortDescending()
            }
            if (criteria === "model") {
                // sort alphabetically
                cars = this.sortAlphabetically()
            }
            const result = []
            result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
            result.push(`-${this.soldCars.length} cars sold:`)
            cars.map(
                car => result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
            )
            return result.join("\n")
        }
    }

    sortDescending() {
        return this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
    }

    sortAlphabetically() {
        return this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
    }
}

/*
let dealership = new CarDealership('SoftAuto')
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000))
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000))
console.log(dealership.addCar('', 120, 4900, 240000))

// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!
*/

/*
let dealership = new CarDealership('SoftAuto')
dealership.addCar('Toyota Corolla', 100, 3500, 190000)
dealership.addCar('Mercedes C63', 300, 29000, 187000)
dealership.addCar('Audi A3', 120, 4900, 240000)
console.log(dealership.sellCar('Toyota Corolla', 230000))
console.log(dealership.sellCar('Mercedes C63', 110000))

// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$
*/

/*
let dealership = new CarDealership('SoftAuto')
dealership.addCar('Toyota Corolla', 100, 3500, 190000)
dealership.addCar('Mercedes C63', 300, 29000, 187000)
dealership.addCar('Audi A3', 120, 4900, 240000)
console.log(dealership.currentCar())

// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$
*/

let dealership = new CarDealership('SoftAuto')
dealership.addCar('Toyota Corolla', 100, 3500, 190000)
dealership.addCar('Mercedes C63', 300, 29000, 187000)
dealership.addCar('Audi A3', 120, 4900, 240000)
dealership.sellCar('Toyota Corolla', 230000)
dealership.sellCar('Mercedes C63', 110000)
console.log(dealership.salesReport('horsepower'))

// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$