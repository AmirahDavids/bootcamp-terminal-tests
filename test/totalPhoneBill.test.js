let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe("The totalPhoneBill function", function () {
    it("should return the total value calculated for a given usage (call)", function () {
        assert.equal("R2.75", totalPhoneBill("call"))
    });
    it("should return the total value calculated for a given usage (call)", function () {
        assert.equal("R5.50", totalPhoneBill("call,call"))
    });
    it("should return the total value calculated for a given usage (sms)", function () {
        assert.equal("R0.65", totalPhoneBill("sms"))
    });
    it("should return the total value calculated for a given usage (sms) ", function () {
        assert.equal("R1.30", totalPhoneBill("sms,sms"))
    });
    it("should return the total value calculated for a given usage (call + sms) ", function () {
        assert.equal("R3.40", totalPhoneBill("call,sms"))
    });
    it("should return the total value calculated for a given usage (call + sms) ", function () {
        assert.equal("R6.80", totalPhoneBill("call,sms,call,sms"))
    });
});