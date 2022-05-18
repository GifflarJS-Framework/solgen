"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("IF Model", function () {
    var ifModel = tsyringe_1.container.resolve("IfModel");
    it("Creating", function () {
        var expected = {
            statement: "if",
            else: false,
            condition: "1 > 2",
            content: [],
        };
        var _ifModel = ifModel.execute({ condition: "1 > 2", onElse: false });
        var result = JSON.stringify(_ifModel);
        expect(result).toEqual(JSON.stringify(expected));
    });
});
