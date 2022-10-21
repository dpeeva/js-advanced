const { expect } = require("chai")
const { isSymmetric } = require("./checkForSymmetry")

describe("isSymmetric", () => {
    it("returns false for non-symmetric odd length", () => {
        expect(isSymmetric([1, 2, 3])).to.false
    })
    it("returns false for non-symmetric even length", () => {
        expect(isSymmetric([1, 2, 3, 1])).to.false
    })
    it("returns true for symmetric odd length", () => {
        expect(isSymmetric([1, 2, 1])).to.true
    })
    it("returns true for symmetric even length", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.true
    })
    it("returns false for non-symmetric with string values", () => {
        expect(isSymmetric(["1", 2, 1])).to.false
    })
    it("returns true for symmetric with string and number values", () => {
        expect(isSymmetric(["1", 2, "1"])).to.true
    })
    it("returns true for symmetric with string values", () => {
        expect(isSymmetric(["1", "2", "1"])).to.true
    })
    it("returns true for symmetric with string values", () => {
        expect(isSymmetric(["1", 2, "1"])).to.true
    })
    it("returns true on empty array", () => {
        expect(isSymmetric([])).to.true
    })
    it("returns false on invalid input empty", () => {
        expect(isSymmetric()).to.false
    })
    it("returns false on invalid input number", () => {
        expect(isSymmetric(5)).to.false
    })
    it("returns false on invalid input string", () => {
        expect(isSymmetric("a")).to.false
    })
})