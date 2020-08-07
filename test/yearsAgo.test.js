let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe("yearsAgo function", function () {
    it("should return the correct number years ago", function () {
        var expected = 28;
        var actual = yearsAgo(1992);
        assert.equal(expected, actual)
    });
    it("should return the correct number years ago", function () {
        var expected = 10;
        var actual = yearsAgo(2010);
        assert.equal(expected, actual)
    });
    it("should return the correct number years ago", function () {
        var expected = 5;
        var actual = yearsAgo(2015);
        assert.equal(expected, actual)
    });
});