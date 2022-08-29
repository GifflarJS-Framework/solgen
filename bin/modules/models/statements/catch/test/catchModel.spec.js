"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("CatchModel", function () {
    var catchModel = tsyringe_1.container.resolve("CatchModel");
    it("Creating Catch Model", function () {
        var _catch = catchModel.execute({
            identifier: "Error",
            parameters: [{ type: "bytes", name: "err" }],
        });
        var expected = {
            statement: "catch",
            identifier: "Error",
            parameters: [{ type: "bytes", name: "err" }],
            content: [],
        };
        expect(JSON.stringify(_catch)).toEqual(JSON.stringify(expected));
    });
    it("Creating Catch Model without identifier", function () {
        var _catch = catchModel.execute({
            parameters: [{ type: "bytes", name: "err" }],
        });
        var expected = {
            statement: "catch",
            parameters: [{ type: "bytes", name: "err" }],
            content: [],
        };
        expect(JSON.stringify(_catch)).toEqual(JSON.stringify(expected));
    });
});
