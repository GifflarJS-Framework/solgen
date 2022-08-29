"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Assert Writer", function () {
    var assertWriter = tsyringe_1.container.resolve("AssertWriter");
    it("Writing", function () {
        var assert = {
            statement: "assert",
            condition: "a == b",
        };
        var result = assertWriter.write(assert);
        var expected = "assert(a == b)";
        expect(result).toEqual(expected);
    });
});
