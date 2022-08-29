"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("UsingModel", function () {
    var usingModel = tsyringe_1.container.resolve("UsingModel");
    it("Creating Using", function () {
        var using = usingModel.execute({
            identifier: "MyLibrary",
            type: "uint",
        });
        var expected = {
            identifier: "MyLibrary",
            type: "uint",
        };
        expect(JSON.stringify(using)).toEqual(JSON.stringify(expected));
    });
});
