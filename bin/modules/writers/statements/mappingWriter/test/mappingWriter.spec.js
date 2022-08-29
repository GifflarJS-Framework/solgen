"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("MappingWriter", function () {
    var mappingModel = tsyringe_1.container.resolve("MappingModel");
    var mappingWriter = tsyringe_1.container.resolve("MappingWriter");
    it("Writing mapping to simple type", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { regularType: "address" },
            typeName: { regularType: "uint256" },
        });
        var result = mappingWriter.write(mapping);
        var expected = "mapping(address => uint256) myMapping";
        expect(result).toEqual(expected);
    });
    it("Writing mapping to dynamic array", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { customType: "User" },
            typeName: { array: { arrayType: "address" } },
        });
        var result = mappingWriter.write(mapping);
        var expected = "mapping(User => address[]) myMapping";
        expect(result).toEqual(expected);
    });
    it("Writing mapping to fixed array", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { customType: "User" },
            typeName: { array: { arrayType: "address", arraySize: 5 } },
        });
        var result = mappingWriter.write(mapping);
        var expected = "mapping(User => address[5]) myMapping";
        expect(result).toEqual(expected);
    });
    it("Writing mapping to mapping", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { regularType: "address" },
            typeName: {
                nestedMapping: {
                    type: { regularType: "uint256" },
                    typeName: { regularType: "uint256" },
                },
            },
        });
        var result = mappingWriter.write(mapping);
        var expected = "mapping(address => mapping(uint256 => uint256)) myMapping";
        expect(result).toEqual(expected);
    });
});
