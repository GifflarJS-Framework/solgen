"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("UsingWriter", function () {
    var usingModel = tsyringe_1.container.resolve("UsingModel");
    var usingWriter = tsyringe_1.container.resolve("UsingWriter");
    it("Writing Using", function () {
        var using = usingModel.execute({ identifier: "MyLibrary", type: "uint" });
        var result = usingWriter.write([using]);
        var expected = "using MyLibrary for uint;\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing many Using", function () {
        var using = usingModel.execute({ identifier: "MyLibrary", type: "uint" });
        var using2 = usingModel.execute({
            identifier: "MyStringLibrary",
            type: "string",
        });
        var result = usingWriter.write([using, using2]);
        var expected = "using MyLibrary for uint;\nusing MyStringLibrary for string;\n\n";
        expect(result).toEqual(expected);
    });
});
