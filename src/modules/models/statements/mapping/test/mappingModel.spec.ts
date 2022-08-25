import { container } from "tsyringe";
import { IMappingModel } from "../types/IMappingModel";

describe("Mapping Model", () => {
  const mappingModel = container.resolve<IMappingModel>("MappingModel");

  it("Creating Mapping Model", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: "uint256",
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: "address",
      typeName: "uint256",
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Mapping with custom types", () => {
    const mapping = mappingModel.execute({
      customType: "User",
      customTypeName: "MyContract",
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: "User",
      typeName: "MyContract",
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Mapping with array type", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: { arrayType: "uint256", arraySize: 5 },
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: "address",
      typeName: { arrayType: "uint256", arraySize: 5 },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Mapping with array type no size", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: { arrayType: "uint256" },
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: "address",
      typeName: { arrayType: "uint256" },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });
});
