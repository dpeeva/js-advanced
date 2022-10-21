const { assert, expect } = require("chai")
const { createCalculator } = require("./createCalculator")

describe("createCalculator", () => {
    it("returns false for empty input", () => {
        expect(createCalculator()).to.false
    })
})