"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("EnumWriter", function () {
    var enumModel = tsyringe_1.container.resolve("EnumModel");
    var enumWriter = tsyringe_1.container.resolve("EnumWriter");
    it("Writing", function () {
        var _enum = enumModel.execute({
            identifier: "FreshJuiceSize",
            identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
        });
        var result = enumWriter.write([_enum]);
        var expected = "enum FreshJuiceSize{SMALL, MEDIUM, LARGE}\n";
        expect(result).toEqual(expected);
    });
    it("Writing many", function () {
        var _enum = enumModel.execute({
            identifier: "FreshJuiceSize",
            identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
        });
        var _enum2 = enumModel.execute({
            identifier: "Status",
            identifiersOptions: ["Pending", "Accepted", "Canceled", "Rejected"],
        });
        var _enum3 = enumModel.execute({
            identifier: "Button",
            identifiersOptions: ["ON", "OFF"],
        });
        var result = enumWriter.write([_enum, _enum2, _enum3]);
        var expected = "enum FreshJuiceSize{SMALL, MEDIUM, LARGE}\nenum Status{Pending, Accepted, Canceled, Rejected}\nenum Button{ON, OFF}\n";
        expect(result).toEqual(expected);
    });
});
