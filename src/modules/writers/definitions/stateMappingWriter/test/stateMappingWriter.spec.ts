import { IStateMappingModel } from "@models/definitions/stateMapping/types/IStateMappingModel";
import { container } from "tsyringe";
import { IStateMappingWriter } from "../types/IStateMappingWriter";

describe("State MappingWriter", () => {
  const mappingModel =
    container.resolve<IStateMappingModel>("StateMappingModel");
  const mappingWriter =
    container.resolve<IStateMappingWriter>("StateMappingWriter");

  it("Writing mapping to simple type", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { regularType: "address" },
      typeName: { regularType: "uint256" },
      scope: "public",
    });

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(address => uint256) public myMapping;\n\n`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to dynamic array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { customType: "User" },
      typeName: { array: { arrayType: { regularType: "address" } } },
      scope: "private",
    });

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(User => address[]) private myMapping;\n\n`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to fixed array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { customType: "User" },
      typeName: {
        array: { arrayType: { regularType: "address" }, arraySize: 5 },
      },
      scope: "private",
    });

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(User => address[5]) private myMapping;\n\n`;

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
      scope: "private",
    });

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(address => mapping(uint256 => uint256)) private myMapping;\n\n`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to mapping 2x", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      type: { regularType: "address" },
      typeName: {
        nestedMapping: {
          type: { regularType: "uint256" },
          typeName: {
            nestedMapping: {
              type: { regularType: "address" },
              typeName: { array: { arrayType: { regularType: "uint256" } } },
            },
          },
        },
      },
      scope: "private",
    });

    const mapping2 = mappingModel.execute({
      name: "myMapping",
      type: { regularType: "address" },
      typeName: { regularType: "uint256" },
      scope: "public",
    });

    const result = mappingWriter.write([mapping, mapping2]);
    const expected = `mapping(address => mapping(uint256 => mapping(address => uint256[]))) private myMapping;\nmapping(address => uint256) public myMapping;\n\n`;

    expect(result).toEqual(expected);
  });
});
