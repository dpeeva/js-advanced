const { assert, expect } = require("chai")
const { sum } = require("../sumNumbers")

describe("sum", () => {
    it("sums correctly integer numbers", () => {
        expect(sum([1, 2, 3])).to.equal(6, "did not work with 1, 2, 3")
    })
    it("sums correctly floating-point numbers", () => {
        expect(sum([1, 2, 3.3])).to.equal(6.3, "did not work with 1, 2, 3.3")
    })
    it("sums correctly an empty array", () => {
        expect(sum([])).to.equal(0, "did not work with [ ]")
    })
    it("sums correctly numbers as strings", () => {
        expect(sum(["1", 2])).to.equal(3, "did not work with ['1', 2]")
    })
    it("sums correctly numbers and strings", () => {
        expect(sum(["a", 2])).to.be.NaN
    })
    it("sums correctly with negative numbers", () => {
        expect(sum([2, -2])).to.equal(0, "did not work with [2, -2]")
    })
    it("sums correctly negative numbers", () => {
        expect(sum([-2, -2])).to.equal(-4, "did not work with [-2, -2]")
    })
    it("returns TypeError", () => {
        assert.throws(
            () => sum(),
            "arr is not iterable"
        )
    })
})