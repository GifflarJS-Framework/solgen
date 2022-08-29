"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("EnumModel", function () {
    var enumModel = tsyringe_1.container.resolve("EnumModel");
    it("Creating Enum Model", function () {
        var _enum = enumModel.execute({
            identifier: "FreshJuiceSize",
            identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
        });
        var expected = {
            identifier: "FreshJuiceSize",
            identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
        };
        expect(JSON.stringify(_enum)).toEqual(JSON.stringify(expected));
    });
});
