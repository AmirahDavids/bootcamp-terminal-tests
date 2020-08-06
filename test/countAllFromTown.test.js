let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe("The countAllFromTown function", function () {
    it("should return the correct number of registrations for a specific town", function () {
        assert.equal(2, countAllFromTown("CA 1234,CA 555,CY 00001", "CA"));
        assert.equal(1, countAllFromTown("CA 1234,CA 555,CY 00001", "CY"));
        assert.equal(10, countAllFromTown("CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001", "CA"));
        assert.equal(5, countAllFromTown("CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001", "CY"))
    });
});