"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("ImportWriter", function () {
    var importModel = tsyringe_1.container.resolve("ImportModel");
    var importWriter = tsyringe_1.container.resolve("ImportWriter");
    it("Writing Import", function () {
        var _import = importModel.execute({ identifierPath: "./MyContract" });
        var result = importWriter.write([_import]);
        var expected = "import \"./MyContract\";\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing Import with alias", function () {
        var _import = importModel.execute({
            identifierPath: "./MyContract",
            alias: "MyContractAlias",
        });
        var result = importWriter.write([_import]);
        var expected = "import \"./MyContract\" as MyContractAlias;\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing many Imports", function () {
        var _import = importModel.execute({
            identifierPath: "./MyContract",
            alias: "MyContractAlias",
        });
        var _import2 = importModel.execute({
            identifierPath: "./MyLibrary",
        });
        var result = importWriter.write([_import, _import2]);
        var expected = "import \"./MyContract\" as MyContractAlias;\nimport \"./MyLibrary\";\n\n";
        expect(result).toEqual(expected);
    });
});
