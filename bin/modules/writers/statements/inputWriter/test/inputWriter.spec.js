"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Input Writer", function () {
    it("Writing Input", function () {
        var inputWriter = tsyringe_1.container.resolve("InputWriter");
        var inputs = [
            {
                type: "uint",
                name: "age",
            },
            {
                type: "string",
                name: "name",
            },
        ];
        var expected = "uint age, string memory name";
        var result = inputWriter.write(inputs);
        var expectedNoType = "age, name";
        var resultNoType = inputWriter.write(inputs, false);
        expect(result).toMatch(expected);
        expect(resultNoType).toMatch(expectedNoType);
    });
});
