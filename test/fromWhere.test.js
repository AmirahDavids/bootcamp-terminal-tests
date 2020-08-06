let assert = require("assert");
let fromWhere = require("../fromWhere");


describe("The fromWhere function", function () {
    it("should return the name of the town that the registration number is from", function () {
        var expected = "Cape Town";
        var actual = fromWhere("CA 213-456");
        assert.equal(expected, actual);
    });
    it("should return the name of the town that the registration number is from", function () {
        var expected = "Bellville";
        var actual = fromWhere("CY 213-456");
        assert.equal(expected, actual);
    });
    it("should return the name of the town that the registration number is from", function () {
        var expected = "Paarl";
        var actual = fromWhere("CJ 213-456");
        assert.equal(expected, actual);
    });
    it("should return the name of the town that the registration number is from", function () {
        var expected = "Some other place!";
        var actual = fromWhere("CD 213-456");
        assert.equal(expected, actual);
    });
});