"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("ImportModel", function () {
    var importModel = tsyringe_1.container.resolve("ImportModel");
    it("Creating Import", function () {
        var _import = importModel.execute({ identifierPath: "./MyContract" });
        var expected = {
            identifierPath: "./MyContract",
        };
        expect(JSON.stringify(_import)).toEqual(JSON.stringify(expected));
    });
    it("Creating Import with alias", function () {
        var _import = importModel.execute({
            identifierPath: "./MyContract",
            alias: "MyContractAlias",
        });
        var expected = {
            identifierPath: "./MyContract",
            alias: "MyContractAlias",
        };
        expect(JSON.stringify(_import)).toEqual(JSON.stringify(expected));
    });
});
