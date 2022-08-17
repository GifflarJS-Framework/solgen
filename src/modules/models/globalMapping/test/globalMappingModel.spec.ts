import { container } from "tsyringe";
import { IGlobalMappingModel } from "../types/IGlobalMappingModel";

describe("Global Mapping Model", () => {
  const mappingModel =
    container.resolve<IGlobalMappingModel>("GlobalMappingModel");

  it("Creating Global Mapping Model", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: "uint256",
      name: "myMapping",
    });

    const expected = {
      statement: "global_mapping",
      type: "address",
      typeName: "uint256",
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Global Mapping with custom types", () => {
    const mapping = mappingModel.execute({
      customType: "User",
      customTypeName: "MyContract",
      name: "myMapping",
      scope: "public",
    });

    const expected = {
      statement: "global_mapping",
      type: "User",
      typeName: "MyContract",
      name: "myMapping",
      scope: "public",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Global Mapping with array type", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: { arrayType: "uint256", arraySize: 5 },
      name: "myMapping",
    });

    const expected = {
      statement: "global_mapping",
      type: "address",
      typeName: { arrayType: "uint256", arraySize: 5 },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Global Mapping with array type no size", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: { arrayType: "uint256" },
      name: "myMapping",
    });

    const expected = {
      statement: "global_mapping",
      type: "address",
      typeName: { arrayType: "uint256" },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });
});
