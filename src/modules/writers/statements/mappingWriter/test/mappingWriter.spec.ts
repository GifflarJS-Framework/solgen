import { IMappingModel } from "@models/statements/mapping/types/IMappingModel";
import { container } from "tsyringe";
import { IMappingWriter } from "../types/IMappingWriter";

describe("MappingWriter", () => {
  const mappingModel = container.resolve<IMappingModel>("MappingModel");
  const mappingWriter = container.resolve<IMappingWriter>("MappingWriter");

  it("Writing mapping to simple type", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { regularType: "address" },
      typeName: { regularType: "uint256" },
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(address => uint256) myMapping`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to dynamic array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { customType: "User" },
      typeName: { array: { arrayType: { regularType: "address" } } },
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(User => address[]) myMapping`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to fixed array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { customType: "User" },
      typeName: {
        array: { arrayType: { regularType: "address" }, arraySize: 5 },
      },
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(User => address[5]) myMapping`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to mapping", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { regularType: "address" },
      typeName: {
        nestedMapping: {
          type: { regularType: "uint256" },
          typeName: { regularType: "uint256" },
        },
      },
    });

    const result = mappingWriter.write(mapping);
    const expected = `mapping(address => mapping(uint256 => uint256)) myMapping`;

    expect(result).toEqual(expected);
  });
});
