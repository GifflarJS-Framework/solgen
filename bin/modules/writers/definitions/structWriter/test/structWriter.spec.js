"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Struct Writer", function () {
    var structModel = tsyringe_1.container.resolve("StructModel");
    var structWriter = tsyringe_1.container.resolve("StructWriter");
    it("Writing", function () {
        var struct = structModel.execute({
            identifier: "MyType",
            variables: [{ type: "string", name: "name" }],
            mappings: [
                {
                    type: { regularType: "address" },
                    typeName: { regularType: "uint256" },
                    name: "balances",
                },
            ],
        });
        var result = structWriter.write(struct);
        var expected = "struct MyType {\nstring name;\nmapping(address => uint256) balances;\n}";
        expect(result).toEqual(expected);
    });
});
