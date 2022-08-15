import { IMappingModel } from "@models/mapping/types/IMappingModel";
import { container } from "tsyringe";
import { IMappingWriter } from "../types/IMappingWriter";

describe("MappingWriter", () => {
  const mappingModel = container.resolve<IMappingModel>("MappingModel");
  const mappingWriter = container.resolve<IMappingWriter>("MappingWriter");

  it("Writing mapping to simple type", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: "address",
      typeName: "uint256",
      scope: "public",
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(address => uint256) public myMapping;`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to dynamic array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "User",
      typeName: { arrayType: "address" },
      scope: "private",
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(User => address[]) private myMapping;`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to fixed array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "User",
      typeName: { arrayType: "address", arraySize: 5 },
      scope: "private",
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(User => address[5]) private myMapping;`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to mapping", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "address",
      typeName: {
        statement: "nested_mapping",
        type: "uint256",
        typeName: "uint256",
      },
      scope: "private",
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(address => mapping(uint256 => uint256)) private myMapping;`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to mapping 2x", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "address",
      typeName: {
        statement: "nested_mapping",
        type: "uint256",
        typeName: {
          statement: "nested_mapping",
          type: "address",
          typeName: { arrayType: "uint256" },
        },
      },
      scope: "private",
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(address => mapping(uint256 => mapping(address => uint256[]))) private myMapping;`;

    expect(result).toEqual(expected);
  });
});
