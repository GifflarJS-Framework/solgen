"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Require Writer", function () {
    var requireWriter = tsyringe_1.container.resolve("RequireWriter");
    it("Writing", function () {
        var require = {
            statement: "require",
            condition: "a == b",
        };
        var result = requireWriter.write(require);
        var expected = "require(a == b)";
        expect(result).toEqual(expected);
    });
    it("Writing with error message", function () {
        var require = {
            statement: "require",
            condition: "a == b",
            errorMessage: "a must be equal to b.",
        };
        var result = requireWriter.write(require);
        var expected = "require(a == b, \"a must be equal to b.\")";
        expect(result).toEqual(expected);
    });
});
