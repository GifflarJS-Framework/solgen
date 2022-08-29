"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Output Writer", function () {
    it("Writing Output", function () {
        var outputWriter = tsyringe_1.container.resolve("OutputWriter");
        var outputs = [
            { type: "address", name: "output1" },
            { type: "uint256", name: "output2" },
        ];
        var result = outputWriter.write(outputs);
        var expected = "returns(address output1, uint256 output2)";
        expect(result).toEqual(expected);
    });
    it("Writing Output without name", function () {
        var outputWriter = tsyringe_1.container.resolve("OutputWriter");
        var outputs = [
            { type: "address", name: "output1" },
            { type: "string" },
        ];
        var result = outputWriter.write(outputs);
        var expected = "returns(address output1, string memory)";
        expect(result).toEqual(expected);
    });
});
