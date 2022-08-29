"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("TryWriter", function () {
    var contentWriterMock = {
        write: function (content) {
            return "";
        },
    };
    var tryModel = tsyringe_1.container.resolve("TryModel");
    var tryWriter = tsyringe_1.container.resolve("TryWriter");
    tryWriter._init(contentWriterMock);
    it("Writing", function () {
        var _try = tryModel.execute({
            expression: {
                methodCall: {
                    variable: "MyContract",
                    method: "add",
                    value: "value",
                },
            },
            parameters: [{ type: "uint256", name: "arg" }],
        });
        var result = tryWriter.write(_try);
        var expected = "try MyContract.add(value) returns(uint256 arg){\n}";
        expect(result).toEqual(expected);
    });
});
