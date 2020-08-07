let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe("The countRegNumber function", function () {
    it("should give the correct number of registrations in a string", function () {
        var expected = 2;
        var actual = countRegNumber("CA 213-456,CY 123456");
        assert.equal(expected, actual)
    });
    it("should give the correct number of registrations in a string", function () {
        var expected = 4;
        var actual = countRegNumber("CJ 000-999,CA 021-879,CY 456-321,CY 000-000");
        assert.equal(expected, actual)
    });
});

