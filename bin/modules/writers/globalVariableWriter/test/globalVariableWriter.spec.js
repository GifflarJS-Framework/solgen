"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Global Variable Writer", function () {
    var variableWriter = tsyringe_1.container.resolve("GlobalVariableWriter");
    it("Writing Global Variable", function () {
        var variable = {
            statement: "global_variable",
            name: "age",
            type: "uint",
            value: "20",
            scope: "private",
        };
        var expected = "//VARIABLES\nuint private age = 20;";
        var functions = [
            {
                name: "setAge",
                scope: "public",
                isConstructor: false,
                inputs: [{ name: "_age", type: "uint" }],
                outputs: [],
                modifiers: [],
                content: [
                    {
                        statement: "assignment",
                        variable: "age",
                        value: {
                            statement: "expression",
                            value: "_age",
                        },
                    },
                ],
            },
        ];
        var result = variableWriter.write(variable, function (request) {
            expect(request).toHaveProperty("functions");
            expect(JSON.stringify(request.functions)).toEqual(JSON.stringify(functions));
            expect(request).toHaveProperty("events", []);
            expect(request).toHaveProperty("text_returns", "");
        });
        expect(result).toMatch(expected);
    });
    it("Writing many variables", function () {
        var variables = [
            {
                statement: "global_variable",
                name: "age",
                type: "uint",
                value: "20",
                scope: "private",
            },
            {
                statement: "global_variable",
                name: "name",
                type: "string",
                value: "",
                scope: "public",
            },
        ];
        var expected = "//VARIABLES\nuint private age = 20;\nstring public name;";
        var functions = [
            {
                name: "setAge",
                scope: "public",
                isConstructor: false,
                inputs: [{ name: "_age", type: "uint" }],
                outputs: [],
                modifiers: [],
                content: [
                    {
                        statement: "assignment",
                        variable: "age",
                        value: {
                            statement: "expression",
                            value: "_age",
                        },
                    },
                ],
            },
        ];
        var result = variableWriter.write(variables, function (request) {
            expect(request).toHaveProperty("functions");
            expect(JSON.stringify(request.functions)).toEqual(JSON.stringify(functions));
            expect(request).toHaveProperty("events", []);
            expect(request).toHaveProperty("text_returns", "");
        });
        expect(result).toMatch(expected);
    });
});
