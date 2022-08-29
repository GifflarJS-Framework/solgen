"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Mapping Model", function () {
    var mappingModel = tsyringe_1.container.resolve("MappingModel");
    it("Creating Mapping Model", function () {
        var mapping = mappingModel.execute({
            type: { regularType: "address" },
            typeName: { regularType: "uint256" },
            name: "myMapping",
        });
        var expected = {
            statement: "mapping",
            type: { regularType: "address" },
            typeName: { regularType: "uint256" },
            name: "myMapping",
        };
        expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
    });
    it("Creating Mapping with custom types", function () {
        var mapping = mappingModel.execute({
            type: { customType: "User" },
            typeName: { customType: "MyContract" },
            name: "myMapping",
        });
        var expected = {
            statement: "mapping",
            type: { customType: "User" },
            typeName: { customType: "MyContract" },
            name: "myMapping",
        };
        expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
    });
    it("Creating Mapping with array type", function () {
        var mapping = mappingModel.execute({
            type: { regularType: "address" },
            typeName: { array: { arrayType: "uint256", arraySize: 5 } },
            name: "myMapping",
        });
        var expected = {
            statement: "mapping",
            type: { regularType: "address" },
            typeName: { array: { arrayType: "uint256", arraySize: 5 } },
            name: "myMapping",
        };
        expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
    });
    it("Creating Mapping with array type no size", function () {
        var mapping = mappingModel.execute({
            type: { regularType: "address" },
            typeName: { array: { arrayType: "uint256" } },
            name: "myMapping",
        });
        var expected = {
            statement: "mapping",
            type: { regularType: "address" },
            typeName: { array: { arrayType: "uint256" } },
            name: "myMapping",
        };
        expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
    });
    it("Creating Mapping with nested mapping", function () {
        var mapping = mappingModel.execute({
            type: { regularType: "address" },
            typeName: {
                nestedMapping: {
                    type: { regularType: "address" },
                    typeName: { regularType: "uint256" },
                },
            },
            name: "myMapping",
        });
        var expected = {
            statement: "mapping",
            type: { regularType: "address" },
            typeName: {
                nestedMapping: {
                    type: { regularType: "address" },
                    typeName: { regularType: "uint256" },
                },
            },
            name: "myMapping",
        };
        expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
    });
});
