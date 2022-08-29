"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Assert Model", function () {
    var assertModel = tsyringe_1.container.resolve("AssertModel");
    it("Creating Assert Model", function () {
        var require = assertModel.execute({ condition: "a == b" });
        var expected = {
            statement: "assert",
            condition: "a == b",
        };
        expect(require).toEqual(expected);
    });
});
