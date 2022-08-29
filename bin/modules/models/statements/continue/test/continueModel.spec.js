"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Continue Model", function () {
    var continueModel = tsyringe_1.container.resolve("ContinueModel");
    it("Creating Continue Model", function () {
        var _continue = continueModel.execute();
        var expected = {
            statement: "continue",
        };
        expect(_continue).toEqual(expected);
    });
});
