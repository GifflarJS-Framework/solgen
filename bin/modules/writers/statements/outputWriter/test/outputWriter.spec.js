"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Output Writer", function () {
    it("Writing Output", function () {
        var variables = [
            { type: "uint256", name: "output1" },
            { type: "string", name: "output2" },
        ];
        var outputWriter = tsyringe_1.container.resolve("OutputWriter");
        var outputs = ["output1", "output2"];
        var expected = "return (output1, output2);";
        var expectedReturns = "returns (uint256, string)";
        var result = outputWriter.write(outputs, variables, function (object) {
            expect(object.text_returns).toMatch(expectedReturns);
        });
        expect(result).toMatch(expected);
    });
});
