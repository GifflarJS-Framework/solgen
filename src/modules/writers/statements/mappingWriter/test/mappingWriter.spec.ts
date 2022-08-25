import { IMappingModel } from "@models/statements/mapping/types/IMappingModel";
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
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(address => uint256) myMapping`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to dynamic array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "User",
      typeName: { arrayType: "address" },
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(User => address[]) myMapping`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to fixed array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "User",
      typeName: { arrayType: "address", arraySize: 5 },
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(User => address[5]) myMapping`;

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
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(address => mapping(uint256 => uint256)) myMapping`;

    expect(result).toEqual(expected);
  });
});
