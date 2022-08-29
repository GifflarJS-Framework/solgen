"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("CustomError", function () {
    var customErrorModel = tsyringe_1.container.resolve("CustomErrorModel");
    it("Creating Custom Error", function () {
        var customError = customErrorModel.execute({
            name: "Unauthorized",
        });
        var expected = {
            name: "Unauthorized",
            args: [],
        };
        expect(customError).toEqual(expected);
    });
    it("Creating Custom Error with args", function () {
        var customError = customErrorModel.execute({
            name: "Unauthorized",
            args: [{ name: "from", type: "address" }],
        });
        var expected = {
            name: "Unauthorized",
            args: [{ name: "from", type: "address" }],
        };
        expect(customError).toEqual(expected);
    });
});
