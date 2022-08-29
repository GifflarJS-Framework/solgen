"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("State Variable Model", function () {
    var stateVariableModel = tsyringe_1.container.resolve("StateVariableModel");
    it("Creating", function () {
        var expected = {
            type: "uint",
            name: "age",
            scope: "private",
            value: "20",
        };
        var model = stateVariableModel.execute({
            name: "age",
            scope: "private",
            type: "uint",
            value: "20",
        });
        var result = JSON.stringify(model);
        expect(result).toEqual(JSON.stringify(expected));
    });
    it("Creating constant", function () {
        var expected = {
            type: "uint",
            name: "age",
            scope: "private",
            stateMutability: "constant",
            value: "20",
        };
        var model = stateVariableModel.execute({
            name: "age",
            scope: "private",
            type: "uint",
            value: "20",
            stateMutability: "constant",
        });
        var result = JSON.stringify(model);
        expect(result).toEqual(JSON.stringify(expected));
    });
    it("Creating constant without value (must throw)", function () {
        expect(function () {
            stateVariableModel.execute({
                name: "age",
                scope: "private",
                type: "uint",
                stateMutability: "constant",
            });
        }).toThrow("A constant must have an initial value.");
    });
    it("Creating immutable", function () {
        var expected = {
            type: "uint",
            name: "age",
            scope: "private",
            stateMutability: "immutable",
        };
        var model = stateVariableModel.execute({
            name: "age",
            type: "uint",
            scope: "private",
            stateMutability: "immutable",
        });
        var result = JSON.stringify(model);
        expect(result).toEqual(JSON.stringify(expected));
    });
});
