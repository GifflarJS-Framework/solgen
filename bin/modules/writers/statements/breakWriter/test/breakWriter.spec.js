"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("BreakWriter", function () {
    var breakModel = tsyringe_1.container.resolve("BreakModel");
    var breakWriter = tsyringe_1.container.resolve("BreakWriter");
    it("Writing", function () {
        var _break = breakModel.execute();
        var result = breakWriter.write(_break);
        var expected = "break";
        expect(result).toEqual(expected);
    });
});
