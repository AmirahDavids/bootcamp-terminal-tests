let assert = require("assert");
let greet = require("../greet");


describe("The greet function", function () {
    it("should greet Amirah correctly", function () {
        assert.equal("Hello, Amirah", greet("Amirah"))
    });
    it("should greet Daiyaan correctly", function () {
        assert.equal("Hello, Daiyaan", greet("Daiyaan"))
    });
    it("should greet Mujahid correctly", function () {
        assert.equal("Hello, Mujahid", greet("Mujahid"))
    });
});