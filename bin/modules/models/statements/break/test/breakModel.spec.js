"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Break Model", function () {
    var breakModel = tsyringe_1.container.resolve("BreakModel");
    it("Creating Break Model", function () {
        var _break = breakModel.execute();
        var expected = {
            statement: "break",
        };
        expect(_break).toEqual(expected);
    });
});
