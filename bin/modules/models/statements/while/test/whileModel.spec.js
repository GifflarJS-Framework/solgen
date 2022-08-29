"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("WhileModel", function () {
    var whileModel = tsyringe_1.container.resolve("WhileModel");
    it("Creating While Model", function () {
        var _while = whileModel.execute({ condition: "a == b" });
        var expected = {
            statement: "while",
            condition: "a == b",
            content: [],
        };
        expect(_while).toEqual(expected);
    });
});
