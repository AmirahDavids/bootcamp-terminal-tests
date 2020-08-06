let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("The isFromBellville function", function () {
    it("should return true if from Bellville", function () {
        assert.equal(true, isFromBellville("CY 123 456"))
    });
    it("should return false if the number is not  from Bellville", function () {
        assert.equal(false, isFromBellville("CA 123 456"))
    });
});