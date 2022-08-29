"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Struct Model", function () {
    var structModel = tsyringe_1.container.resolve("StructModel");
    it("Creating Struct", function () {
        var struct = structModel.execute({
            identifier: "MyType",
            variables: [{ statement: "variable", type: "string", name: "name" }],
            mappings: [
                {
                    statement: "mapping",
                    type: { regularType: "address" },
                    typeName: { regularType: "uint256" },
                    name: "balances",
                },
            ],
        });
        var expected = {
            identifier: "MyType",
            variables: [{ statement: "variable", type: "string", name: "name" }],
            mappings: [
                {
                    statement: "mapping",
                    type: { regularType: "address" },
                    typeName: { regularType: "uint256" },
                    name: "balances",
                },
            ],
        };
        expect(JSON.stringify(struct)).toEqual(JSON.stringify(expected));
    });
});
