"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Expression Writer", function () {
    it("Writing Event Call", function () {
        var expressionWriter = tsyringe_1.container.resolve("ExpressionWriter");
        var expression = {
            statement: "expression",
            value: "!((val+1)+(val+1))",
        };
        var expected = "!((val+1)+(val+1))";
        var result = expressionWriter.write(expression);
        expect(result).toMatch(expected);
    });
});
