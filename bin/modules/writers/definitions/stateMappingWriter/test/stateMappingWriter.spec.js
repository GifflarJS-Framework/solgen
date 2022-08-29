"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("State MappingWriter", function () {
    var mappingModel = tsyringe_1.container.resolve("StateMappingModel");
    var mappingWriter = tsyringe_1.container.resolve("StateMappingWriter");
    it("Writing mapping to simple type", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { regularType: "address" },
            typeName: { regularType: "uint256" },
            scope: "public",
        });
        var result = mappingWriter.write([mapping]);
        var expected = "mapping(address => uint256) public myMapping;\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing mapping to dynamic array", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { customType: "User" },
            typeName: { array: { arrayType: "address" } },
            scope: "private",
        });
        var result = mappingWriter.write([mapping]);
        var expected = "mapping(User => address[]) private myMapping;\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing mapping to fixed array", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { customType: "User" },
            typeName: { array: { arrayType: "address", arraySize: 5 } },
            scope: "private",
        });
        var result = mappingWriter.write([mapping]);
        var expected = "mapping(User => address[5]) private myMapping;\n\n";
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
            scope: "private",
        });
        var result = mappingWriter.write([mapping]);
        var expected = "mapping(address => mapping(uint256 => uint256)) private myMapping;\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing mapping to mapping 2x", function () {
        var mapping = mappingModel.execute({
            name: "myMapping",
            type: { regularType: "address" },
            typeName: {
                nestedMapping: {
                    type: { regularType: "uint256" },
                    typeName: {
                        nestedMapping: {
                            type: { regularType: "address" },
                            typeName: { array: { arrayType: "uint256" } },
                        },
                    },
                },
            },
            scope: "private",
        });
        var mapping2 = mappingModel.execute({
            name: "myMapping",
            type: { regularType: "address" },
            typeName: { regularType: "uint256" },
            scope: "public",
        });
        var result = mappingWriter.write([mapping, mapping2]);
        var expected = "mapping(address => mapping(uint256 => mapping(address => uint256[]))) private myMapping;\nmapping(address => uint256) public myMapping;\n\n";
        expect(result).toEqual(expected);
    });
});
