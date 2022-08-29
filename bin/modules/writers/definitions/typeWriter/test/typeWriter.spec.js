"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Type Writer", function () {
    var typeModel = tsyringe_1.container.resolve("TypeModel");
    var typeWriter = tsyringe_1.container.resolve("TypeWriter");
    it("Writing", function () {
        var type = typeModel.execute({ identifier: "my_uint", type: "uint" });
        var result = typeWriter.write([type]);
        var expected = "type my_uint is uint;\n";
        expect(result).toEqual(expected);
    });
    it("Writing many types", function () {
        var type = typeModel.execute({ identifier: "my_uint", type: "uint" });
        var type2 = typeModel.execute({
            identifier: "my_string",
            type: "string",
        });
        var type3 = typeModel.execute({
            identifier: "my_address",
            type: "address",
        });
        var result = typeWriter.write([type, type2, type3]);
        var expected = "type my_uint is uint;\ntype my_string is string;\ntype my_address is address;\n";
        expect(result).toEqual(expected);
    });
});
