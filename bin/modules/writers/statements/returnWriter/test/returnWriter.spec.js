"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("ReturnWriter", function () {
    var returnModel = tsyringe_1.container.resolve("ReturnModel");
    var returnWriter = tsyringe_1.container.resolve("ReturnWriter");
    it("Writing", function () {
        var _return = returnModel.execute({
            expressions: ["myVariable", "myVariable2"],
        });
        var result = returnWriter.write(_return);
        var expected = "return (myVariable, myVariable2)";
        expect(result).toEqual(expected);
    });
});
