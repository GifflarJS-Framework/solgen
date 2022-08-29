"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("DoWhileModel", function () {
    var doWhileModel = tsyringe_1.container.resolve("DoWhileModel");
    it("Creating Do/While Model", function () {
        var _doWhile = doWhileModel.execute({ condition: "a == b" });
        var expected = {
            statement: "do_while",
            condition: "a == b",
            content: [],
        };
        expect(_doWhile).toEqual(expected);
    });
});
