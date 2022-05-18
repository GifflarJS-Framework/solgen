"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Global Variable Model", function () {
    it("Creating", function () {
        var globalVariableModel = tsyringe_1.container.resolve("GlobalVariableModel");
        var expected = {
            statement: "global_variable",
            type: "uint",
            name: "age",
            scope: "private",
            value: "20",
        };
        var model = globalVariableModel.execute({
            name: "age",
            scope: "private",
            type: "uint",
            value: "20",
        });
        var result = JSON.stringify(model);
        expect(result).toEqual(JSON.stringify(expected));
    });
});
