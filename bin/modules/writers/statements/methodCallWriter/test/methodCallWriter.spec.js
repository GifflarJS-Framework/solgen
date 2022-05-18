"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Method Call Writer", function () {
    it("Writing Method Call", function () {
        var methodCallWriter = tsyringe_1.container.resolve("MethodCallWriter");
        var inputs = {
            statement: "method_call",
            variable: "person",
            method: "setAge",
            value: "20",
        };
        var expected = "person.setAge(20)";
        var result = methodCallWriter.write(inputs);
        expect(result).toMatch(expected);
    });
});
