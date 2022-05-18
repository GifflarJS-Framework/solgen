"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var exampleContractModel = require("../../../../test/examples/modeling/contract-4");
var writing_path = __dirname + "/../../../../test/examples/writing/";
describe("Contract Writer", function () {
    it("Writing Contract", function () {
        var contractWriter = tsyringe_1.container.resolve("ContractWriter");
        var expected = fs_1.default.readFileSync(writing_path + "contract-4.txt", {
            encoding: "utf8",
        });
        var result = contractWriter.write(exampleContractModel, function () { });
        expect(result).toMatch(expected);
    });
});
