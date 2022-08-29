import { container } from "tsyringe";
import { IMappingModel } from "../types/IMappingModel";

describe("Mapping Model", () => {
  const mappingModel = container.resolve<IMappingModel>("MappingModel");

  it("Creating Mapping Model", () => {
    const mapping = mappingModel.execute({
      type: { regularType: "address" },
      typeName: { regularType: "uint256" },
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: { regularType: "address" },
      typeName: { regularType: "uint256" },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Mapping with custom types", () => {
    const mapping = mappingModel.execute({
      type: { customType: "User" },
      typeName: { customType: "MyContract" },
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: { customType: "User" },
      typeName: { customType: "MyContract" },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Mapping with array type", () => {
    const mapping = mappingModel.execute({
      type: { regularType: "address" },
      typeName: { array: { arrayType: "uint256", arraySize: 5 } },
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: { regularType: "address" },
      typeName: { array: { arrayType: "uint256", arraySize: 5 } },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Mapping with array type no size", () => {
    const mapping = mappingModel.execute({
      type: { regularType: "address" },
      typeName: { array: { arrayType: "uint256" } },
      name: "myMapping",
    });

    const expected = {
      statement: "mapping",
      type: { regularType: "address" },
      typeName: { array: { arrayType: "uint256" } },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating Mapping with nested mapping", () => {
    const mapping = mappingModel.execute({
      type: { regularType: "address" },
      typeName: {
        nestedMapping: {
          type: { regularType: "address" },
          typeName: { regularType: "uint256" },
        },
      },
      name: "myMapping",
    });

    const expected = {
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
