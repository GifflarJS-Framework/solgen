"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Contract Writer", function () {
    it("Writing Contract", function () {
        var functionWriter = tsyringe_1.container.resolve("FunctionWriter");
        var myFunction = {
            name: "MyFunction",
            scope: "public",
            isConstructor: false,
            stateMutability: "view",
            inputs: [],
            modifiers: [],
            outputs: [{ type: "uint" }],
            content: [
                { statement: "variable", name: "age", type: "uint", value: "18" },
            ],
        };
        var expected = "//FUNCTIONS\nfunction MyFunction() public view returns(uint){\nuint age = 18;\n}\n\n";
        var result = functionWriter.write([myFunction]);
        expect(result).toMatch(expected);
    });
});
