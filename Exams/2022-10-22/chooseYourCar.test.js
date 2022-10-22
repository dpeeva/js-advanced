const { expect } = require("chai")
const { chooseYourCar } = require("./chooseYourCar")

describe("chooseYourCar", () => {
    describe("choosingType", () => {
        it("returns correct message for old car", () => {
            const type = "Sedan"
            const color = "white"
            expect(chooseYourCar.choosingType(type, color, 1920)).to.equal(`This ${type} is too old for you, especially with that ${color} color.`)
        })
        it("returns correct message for new car", () => {
            const type = "Sedan"
            const color = "white"
            expect(chooseYourCar.choosingType(type, color, 2010)).to.equal(`This ${color} ${type} meets the requirements, that you have.`)
            expect(chooseYourCar.choosingType(type, color, 2012)).to.equal(`This ${color} ${type} meets the requirements, that you have.`)
            expect(chooseYourCar.choosingType(type, "#FFF", 2022)).to.equal(`This ${"#FFF"} ${type} meets the requirements, that you have.`)
        })
        it("throws for invalid input", () => {
            // Invalid cases
            expect(() => chooseYourCar.choosingType().to.throw)
            expect(() => chooseYourCar.choosingType(0).to.throw)
            expect(() => chooseYourCar.choosingType("").to.throw)
            expect(() => chooseYourCar.choosingType("", "", 0).to.throw)
            expect(() => chooseYourCar.choosingType(0, 0, 0).to.throw)
            expect(() => chooseYourCar.choosingType("", "", "").to.throw)
            expect(() => chooseYourCar.choosingType("", 0, 0).to.throw)
            expect(() => chooseYourCar.choosingType("", 0, "").to.throw)
            expect(() => chooseYourCar.choosingType(0, 0, "").to.throw)
        })
        it("throws for invalid type", () => {
            const type = NaN
            const color = "white"
            const year = 2020
            // Invalid cases
            expect(() => chooseYourCar.choosingType(type, color, year).to.throw)
            expect(() => chooseYourCar.choosingType(null, color, year).to.throw)
            expect(() => chooseYourCar.choosingType(undefined, color, year).to.throw)
            expect(() => chooseYourCar.choosingType([], color, year).to.throw)
            expect(() => chooseYourCar.choosingType({}, color, year).to.throw)
        })
        it("throws for invalid color", () => {
            const type = "Sedan"
            const color = NaN
            // Invalid cases
            expect(() => chooseYourCar.choosingType(type, color, 2020).to.throw)
            expect(() => chooseYourCar.choosingType(type, null, 2020).to.throw)
            expect(() => chooseYourCar.choosingType(type, undefined, 2020).to.throw)
            expect(() => chooseYourCar.choosingType(type, [], 2020).to.throw)
            expect(() => chooseYourCar.choosingType(type, {}, 2020).to.throw)
        })
        it("throws for invalid year", () => {
            const type = "Sedan"
            const color = "white"
            // Invalid cases
            expect(() => chooseYourCar.choosingType(type, color, -1).to.throw)
            expect(() => chooseYourCar.choosingType(type, color, null).to.throw)
            expect(() => chooseYourCar.choosingType(type, color, undefined).to.throw)
            expect(() => chooseYourCar.choosingType(type, color, []).to.throw)
            expect(() => chooseYourCar.choosingType(type, color, {}).to.throw)
        })
        it("throw for year below 1900", () => {
            // Invalid cases
            expect(() => chooseYourCar.choosingType("", "", 1800).to.throw)
        })
        it("throw for year above 2022", () => {
            // Invalid cases
            expect(() => chooseYourCar.choosingType("", "", 2023).to.throw)
        })
        it("throws for wrong type", () => {
            expect(() => chooseYourCar.choosingType("Shevrolet", "white", 1920).to.throw) // This type of car is not what you are looking for.
        })
    })

    describe("brandName", () => {
        it("throws for Invalid Information", () => {
            // Missing input
            expect(() => chooseYourCar.brandName().to.throw)

            // Invalid brands, missing brandIndex
            expect(() => chooseYourCar.brandName("").to.throw)
            expect(() => chooseYourCar.brandName("5").to.throw)
            expect(() => chooseYourCar.brandName(5).to.throw)
            expect(() => chooseYourCar.brandName([]).to.throw)
            expect(() => chooseYourCar.brandName({}).to.throw)
            expect(() => chooseYourCar.brandName(NaN).to.throw)
            expect(() => chooseYourCar.brandName(null).to.throw)
            expect(() => chooseYourCar.brandName(undefined).to.throw)

            // Invalid brands
            expect(() => chooseYourCar.brandName(5, 1).to.throw)
            expect(() => chooseYourCar.brandName("5", 1).to.throw)
            expect(() => chooseYourCar.brandName([], 1).to.throw)
            expect(() => chooseYourCar.brandName({}, 1).to.throw)
            expect(() => chooseYourCar.brandName(NaN, 1).to.throw)
            expect(() => chooseYourCar.brandName(null, 1).to.throw)
            expect(() => chooseYourCar.brandName(undefined, 1).to.throw)


            // Invalid brandIndex
            expect(() => chooseYourCar.brandName(["Opel"], 0.5).to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], -2.3).to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], -2).to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], "0.5").to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], NaN).to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], null).to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], []).to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], {}).to.throw)

            // Invalid brandIndex length
            expect(() => chooseYourCar.brandName(["Opel"], 1).to.throw)
            expect(() => chooseYourCar.brandName(["Opel"], 5).to.throw)
        })

        it("retrns for valid cases", () => {
            const brands = ["Opel", "Mazda"]
            // Valid cases
            expect(chooseYourCar.brandName(["Opel"], 0)).to.equal("")
            expect(chooseYourCar.brandName(brands, 0)).to.equal("Mazda")
            expect(chooseYourCar.brandName([...brands, "Honda"], 0)).to.equal("Mazda, Honda")
            expect(chooseYourCar.brandName([...brands, "Honda"], 1)).to.equal("Opel, Honda")
            expect(chooseYourCar.brandName([...brands, "Honda"], 2)).to.equal("Opel, Mazda")
        })
    })

    describe("carFuelConsumption", () => {
        it("throws for Invalid Information", () => {
            // Missing params
            expect(() => chooseYourCar.carFuelConsumption().to.throw)
            // Invalid distanceInKilometers
            expect(() => chooseYourCar.carFuelConsumption("", 10).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(NaN, 10).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(null, 10).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(undefined, 10).to.throw)
            expect(() => chooseYourCar.carFuelConsumption([], 10).to.throw)
            expect(() => chooseYourCar.carFuelConsumption({}, 10).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(0, 10).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(-1, 10).to.throw)
            // Invalid consumptedFuelInLiters
            expect(() => chooseYourCar.carFuelConsumption(100, "").to.throw)
            expect(() => chooseYourCar.carFuelConsumption(100, NaN).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(100, null).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(100, undefined).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(100, []).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(100, {}).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(100, 0).to.throw)
            expect(() => chooseYourCar.carFuelConsumption(100, -1).to.throw)
        })
        it("retrns correct message for litersPerHundredKm < u7", () => {
            const distanceInKilometers = 10
            const consumptedFuelInLiters = 0.5
            const litersPerHundredKm = (
                (consumptedFuelInLiters / distanceInKilometers) * 100
            ).toFixed(2)
            expect(
                chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)
            ).to.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`)
        })
        it("retrns correct message for litersPerHundredKm == u7", () => {
            const distanceInKilometers = 10
            const consumptedFuelInLiters = 0.7
            const litersPerHundredKm = (
                (consumptedFuelInLiters / distanceInKilometers) * 100
            ).toFixed(2)
            expect(
                chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)
            ).to.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`)
        })
        it("returns correct message for burning too much fuel, case 1", () => {
            const distanceInKilometers = 100
            const consumptedFuelInLiters = 10
            const litersPerHundredKm = (
                (consumptedFuelInLiters / distanceInKilometers) * 100
            ).toFixed(2)
            expect(
                chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)
            ).to.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`)
        })
        it("returns correct message for burning too much fuel, case 2", () => {
            const distanceInKilometers = 10
            const consumptedFuelInLiters = 100
            const litersPerHundredKm = (
                (consumptedFuelInLiters / distanceInKilometers) * 100
            ).toFixed(2)
            expect(
                chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)
            ).to.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`)
        })
    })
})