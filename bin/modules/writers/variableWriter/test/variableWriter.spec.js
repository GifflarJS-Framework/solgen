"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe.only("Variable Writer", function () {
    var variableWriter = tsyringe_1.container.resolve("VariableWriter");
    it("Writing Variable", function () {
        var variable = {
            statement: "variable",
            name: "age",
            type: "uint",
            value: "20",
        };
        var expected = "uint age = 20";
        var result = variableWriter.write(variable);
        expect(result).toMatch(expected);
    });
});
