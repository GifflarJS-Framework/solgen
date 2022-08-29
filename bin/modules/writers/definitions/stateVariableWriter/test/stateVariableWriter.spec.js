"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("State Variable Writer", function () {
    var variableWriter = tsyringe_1.container.resolve("StateVariableWriter");
    it("Writing State Variable", function () {
        var variable = {
            name: "age",
            type: "uint",
            value: "20",
            scope: "private",
        };
        var expected = "//VARIABLES\nuint private age = 20;";
        var result = variableWriter.write([variable]);
        expect(result).toMatch(expected);
    });
    it("Writing many variables", function () {
        var variables = [
            {
                name: "age",
                type: "uint",
                value: "20",
                scope: "private",
            },
            {
                name: "name",
                type: "string",
                value: "",
                scope: "public",
            },
        ];
        var expected = "//VARIABLES\nuint private age = 20;\nstring public name;";
        var result = variableWriter.write(variables);
        expect(result).toMatch(expected);
    });
    it("Writing with state mutability", function () {
        var variables = [
            {
                name: "age",
                type: "uint",
                value: "20",
                scope: "private",
                stateMutability: "constant",
            },
            {
                name: "name",
                type: "string",
                scope: "public",
                stateMutability: "immutable",
            },
        ];
        var expected = "//VARIABLES\nuint private constant age = 20;\nstring public immutable name;";
        var result = variableWriter.write(variables);
        expect(result).toMatch(expected);
    });
});
