"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("InheritsWriter", function () {
    var inheritsModel = tsyringe_1.container.resolve("InheritsModel");
    var inheritsWriter = tsyringe_1.container.resolve("InheritsWriter");
    it("Writing", function () {
        var inherits = inheritsModel.execute({
            identifier: "Ownable",
        });
        var result = inheritsWriter.write([inherits]);
        var expected = "is Ownable";
        expect(result).toEqual(expected);
    });
    it("Writing with args", function () {
        var inherits = inheritsModel.execute({
            identifier: "Ownable",
            args: ["1", "\"arg2\""],
        });
        var result = inheritsWriter.write([inherits]);
        var expected = "is Ownable(1, \"arg2\")";
        expect(result).toEqual(expected);
    });
    it("Writing many", function () {
        var inherits = inheritsModel.execute({
            identifier: "Ownable",
            args: ["1", "\"arg2\""],
        });
        var inherits2 = inheritsModel.execute({
            identifier: "Numbers",
            args: ["0x123", "0"],
        });
        var result = inheritsWriter.write([inherits, inherits2]);
        var expected = "is Ownable(1, \"arg2\"), Numbers(0x123, 0)";
        expect(result).toEqual(expected);
    });
});
