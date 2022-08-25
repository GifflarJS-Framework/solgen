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
      type: "address",
      typeName: "uint256",
      scope: "public",
    });

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(address => uint256) public myMapping;\n\n`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to dynamic array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "User",
      typeName: { arrayType: "address" },
      scope: "private",
    });

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(User => address[]) private myMapping;\n\n`;

    expect(result).toEqual(expected);
  });

  it("Writing mapping to fixed array", () => {
    const mapping = mappingModel.execute({
      name: "myMapping",
      customType: "User",
      typeName: { arrayType: "address", arraySize: 5 },
      scope: "private",
    });

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(User => address[5]) private myMapping;\n\n`;

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

    const result = mappingWriter.write([mapping]);
    const expected = `mapping(address => mapping(uint256 => uint256)) private myMapping;\n\n`;

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

    const mapping2 = mappingModel.execute({
      name: "myMapping",
      type: "address",
      typeName: "uint256",
      scope: "public",
    });

    const result = mappingWriter.write([mapping, mapping2]);
    const expected = `mapping(address => mapping(uint256 => mapping(address => uint256[]))) private myMapping;\nmapping(address => uint256) public myMapping;\n\n`;

    expect(result).toEqual(expected);
  });
});
