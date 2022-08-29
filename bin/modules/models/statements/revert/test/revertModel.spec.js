"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("RevertModel", function () {
    var revertModel = tsyringe_1.container.resolve("RevertModel");
    it("Creating Revert Model", function () {
        var revert = revertModel.execute();
        var expected = {
            statement: "revert",
        };
        expect(revert).toEqual(expected);
    });
    it("Creating Revert Model with message", function () {
        var revert = revertModel.execute({
            message: "Not enough Ether provided.",
        });
        var expected = {
            statement: "revert",
            message: "Not enough Ether provided.",
        };
        expect(revert).toEqual(expected);
    });
    it("Creating Revert Model with customErrorCall", function () {
        var revert = revertModel.execute({
            customErrorCall: {
                customErrorName: "Unauthorized",
            },
        });
        var expected = {
            statement: "revert",
            customErrorCall: {
                customErrorName: "Unauthorized",
                args: [],
            },
        };
        expect(revert).toEqual(expected);
    });
    it("Creating Revert Model with customErrorCall and args", function () {
        var revert = revertModel.execute({
            customErrorCall: {
                customErrorName: "Unauthorized",
                args: ["from"],
            },
        });
        var expected = {
            statement: "revert",
            customErrorCall: {
                customErrorName: "Unauthorized",
                args: ["from"],
            },
        };
        expect(revert).toEqual(expected);
    });
});
