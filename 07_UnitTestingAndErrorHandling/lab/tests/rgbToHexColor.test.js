const { expect } = require("chai")
const { rgbToHexColor } = require("./rgbToHexColor")

describe("rgbToHexColor", () => {
    it("returns correctly for black", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000")
    })
    it("returns correctly for white", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF")
    })
    it("returns correctly for valid input", () => {
        expect(rgbToHexColor(1, 2, 3)).to.equal("#010203")
    })
    it("returns correctly for valid input", () => {
        expect(rgbToHexColor(1, 2, 3)).to.equal("#010203")
    })
    it("returns undefined for invalid number input for red", () => {
        expect(rgbToHexColor(-1, 2, 3)).to.undefined
    })
    it("returns undefined for invalid number input for green", () => {
        expect(rgbToHexColor(1, -2, 3)).to.undefined
    })
    it("returns undefined for invalid number input for blue", () => {
        expect(rgbToHexColor(1, 2, -3)).to.undefined
    })
    it("returns undefined for invalid string input for red", () => {
        expect(rgbToHexColor("a", 2, 3)).to.undefined
    })
    it("returns undefined for invalid string input for green", () => {
        expect(rgbToHexColor(1, "b", 3)).to.undefined
    })
    it("returns undefined for invalid string input for blue", () => {
        expect(rgbToHexColor(1, 2, "c")).to.undefined
    })
    it("returns correctly for invalid input", () => {
        expect(rgbToHexColor(256, 256, 256)).to.undefined
    })
})