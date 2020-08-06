let assert = require("assert");
let isWeekday = require("../isWeekday");

describe("isWeekday function", function () {
    it("should return true if param is weekday", function () {
        var expected = true;
        var actual = isWeekday("Monday");
        assert.equal(expected, actual)
    });
    it("should return true if param is weekday", function () {
        var expected = true;
        var actual = isWeekday("Tuesday");
        assert.equal(expected, actual)
    });
    it("should return true if param is weekday", function () {
        var expected = true;
        var actual = isWeekday("Wednesday");
        assert.equal(expected, actual)
    });
    it("should return true if param is weekday", function () {
        var expected = true;
        var actual = isWeekday("Thursday");
        assert.equal(expected, actual)
    });
    it("should return true if param is weekday", function () {
        var expected = true;
        var actual = isWeekday("Friday");
        assert.equal(expected, actual)
    });
    it("should return false if param is weekend", function () {
        var expected = false;
        var actual = isWeekday("Saturday");
        assert.equal(expected, actual)
    });
    it("should return false if param is weekend", function () {
        var expected = false;
        var actual = isWeekday("Sunday");
        assert.equal(expected, actual)
    });
});