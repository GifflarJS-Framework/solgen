"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("ContinueWriter", function () {
    var continueModel = tsyringe_1.container.resolve("ContinueModel");
    var continueWriter = tsyringe_1.container.resolve("ContinueWriter");
    it("Writing", function () {
        var _continue = continueModel.execute();
        var result = continueWriter.write(_continue);
        var expected = "continue";
        expect(result).toEqual(expected);
    });
});
