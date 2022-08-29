"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("TryModel", function () {
    var tryModel = tsyringe_1.container.resolve("TryModel");
    it("Creating Try", function () {
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
        var expected = {
            statement: "try",
            expression: {
                methodCall: {
                    variable: "MyContract",
                    method: "add",
                    value: "value",
                },
            },
            parameters: [{ type: "uint256", name: "arg" }],
            content: [],
        };
        expect(JSON.stringify(_try)).toEqual(JSON.stringify(expected));
    });
});
