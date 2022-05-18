"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Test For Model", function () {
    var forModel = tsyringe_1.container.resolve("ForModel");
    it("Creating For Model", function () {
        var expected = {
            statement: "for",
            assignment: {
                statement: "assignment",
                variable: "i",
                value: { statement: "expression", value: "0" },
            },
            condition: "i < 100",
            expression: { statement: "expression", value: "i++" },
            content: [],
        };
        var result = forModel.execute({
            assignment: {
                statement: "assignment",
                variable: "i",
                value: { statement: "expression", value: "0" },
            },
            condition: "i < 100",
            expression: { statement: "expression", value: "i++" },
        });
        expect(result).toEqual(expected);
    });
});
