"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("ReturnModel", function () {
    var returnModel = tsyringe_1.container.resolve("ReturnModel");
    it("Creating Return", function () {
        var _return = returnModel.execute({
            expressions: ["MyVariable", "MyVariable2"],
        });
        var expected = {
            statement: "return",
            expressions: ["MyVariable", "MyVariable2"],
        };
        expect(JSON.stringify(_return)).toEqual(JSON.stringify(expected));
    });
});
