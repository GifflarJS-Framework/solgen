"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Revert Writer", function () {
    var revertModel = tsyringe_1.container.resolve("RevertModel");
    var revertWriter = tsyringe_1.container.resolve("RevertWriter");
    it("Writing", function () {
        var revert = revertModel.execute();
        var result = revertWriter.write(revert);
        var expected = "revert();";
        expect(result).toEqual(expected);
    });
    it("Writing with message", function () {
        var revert = revertModel.execute({
            message: "Not enough Ether provided.",
        });
        var result = revertWriter.write(revert);
        var expected = "revert(\"Not enough Ether provided.\");";
        expect(result).toEqual(expected);
    });
    it("Writing with customErrorCall", function () {
        var revert = revertModel.execute({
            customErrorCall: {
                customErrorName: "Unauthorized",
            },
        });
        var result = revertWriter.write(revert);
        var expected = "revert Unauthorized();";
        expect(result).toEqual(expected);
    });
    it("Writing with customErrorCall", function () {
        var revert = revertModel.execute({
            customErrorCall: {
                customErrorName: "Unauthorized",
                args: ["from"],
            },
        });
        var result = revertWriter.write(revert);
        var expected = "revert Unauthorized(from);";
        expect(result).toEqual(expected);
    });
});
