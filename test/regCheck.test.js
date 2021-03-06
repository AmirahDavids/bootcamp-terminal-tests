let assert = require("assert");
let regCheck = require("../regCheck");

describe("The regCheck", function () {
    it("should return true if the registration number starts or ends with the second parameter", function () {
        assert.equal(true, regCheck("CA 123456", "CA"))
    });
    it("should return true if the registration number starts or ends with the second parameter", function () {
        assert.equal(true, regCheck("CY 123006", "CY"))
    });
    it("should return true if the registration number starts or ends with the second parameter", function () {
        assert.equal(true, regCheck("CJ 111222", "CJ"))
    });
});