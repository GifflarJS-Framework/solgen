"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Test For Model", function () {
    var forModel = tsyringe_1.container.resolve("ForModel");
    it("Creating For Model", function () {
        var expected = {
            statement: "for",
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            condition: "i < 100",
            expression: { statement: "expression", value: "i++" },
            content: [],
        };
        var result = forModel.execute({
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            condition: "i < 100",
            expression: { statement: "expression", value: "i++" },
        });
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    });
    it("Creating For Model without variable", function () {
        var expected = {
            statement: "for",
            condition: "i < 100",
            expression: { statement: "expression", value: "i++" },
            content: [],
        };
        var result = forModel.execute({
            condition: "i < 100",
            expression: { statement: "expression", value: "i++" },
        });
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    });
    it("Creating For Model without condition", function () {
        var expected = {
            statement: "for",
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            expression: { statement: "expression", value: "i++" },
            content: [],
        };
        var result = forModel.execute({
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            expression: { statement: "expression", value: "i++" },
        });
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    });
    it("Creating For Model without expression", function () {
        var expected = {
            statement: "for",
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            condition: "i < 100",
            content: [],
        };
        var result = forModel.execute({
            variable: {
                statement: "variable",
                type: "uint",
                name: "i",
                value: "0",
            },
            condition: "i < 100",
        });
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    });
    it("Creating For Model without any parameter", function () {
        var expected = {
            statement: "for",
            content: [],
        };
        var result = forModel.execute({});
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    });
});
