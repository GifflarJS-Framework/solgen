"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("InheritsModel", function () {
    var inheritsModel = tsyringe_1.container.resolve("InheritsModel");
    it("Creating Inherts", function () {
        var inherits = inheritsModel.execute({ identifier: "Ownable" });
        var expected = { identifier: "Ownable" };
        expect(JSON.stringify(inherits)).toEqual(JSON.stringify(expected));
    });
    it("Creating Inherts with args", function () {
        var inherits = inheritsModel.execute({
            identifier: "Ownable",
            args: ["1", "arg2"],
        });
        var expected = { identifier: "Ownable", args: ["1", "arg2"] };
        expect(JSON.stringify(inherits)).toEqual(JSON.stringify(expected));
    });
});
