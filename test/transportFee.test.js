let assert = require("assert");
let transportFee = require("../transportFee");


describe("The transportFee function", function () {
    it("should return R20 if shift is morning", function () {
        assert.equal("R20", transportFee("morning"));
    });
    it("should return R10 if shift is afternoon", function () {
        assert.equal("R10", transportFee("afternoon"));
    });
    it("should return free if shift is nightshift", function () {
        assert.equal("free", transportFee("nightshift"));
    });
});