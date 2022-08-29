"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Custom Error Writer", function () {
    var customErrorModel = tsyringe_1.container.resolve("CustomErrorModel");
    var customErrorWriter = tsyringe_1.container.resolve("CustomErrorWriter");
    it("Writing", function () {
        var customError = customErrorModel.execute({ name: "Unauthorized" });
        var result = customErrorWriter.write([customError]);
        var expected = "error Unauthorized();\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing with args", function () {
        var customError = customErrorModel.execute({
            name: "Unauthorized",
            args: [{ name: "from", type: "address" }],
        });
        var result = customErrorWriter.write([customError]);
        var expected = "error Unauthorized(address from);\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing with args", function () {
        var customError = customErrorModel.execute({
            name: "Unauthorized",
            args: [{ name: "from", type: "address" }],
        });
        var customError2 = customErrorModel.execute({
            name: "InsufficientBalance",
            args: [
                { name: "available", type: "uint256" },
                { name: "required", type: "uint256" },
            ],
        });
        var result = customErrorWriter.write([customError, customError2]);
        var expected = "error Unauthorized(address from);\nerror InsufficientBalance(uint256 available, uint256 required);\n\n";
        expect(result).toEqual(expected);
    });
});
