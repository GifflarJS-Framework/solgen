"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("New Contract Writer", function () {
    it("Writing New Contract", function () {
        var newContractWriter = tsyringe_1.container.resolve("NewContractWriter");
        var newContract = {
            statement: "newcontract",
            args: ["owner"],
            contractName: "MyContract",
        };
        var expected = "new MyContract(owner)";
        var result = newContractWriter.write(newContract);
        expect(result).toMatch(expected);
    });
});
