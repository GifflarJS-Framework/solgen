import { container } from "tsyringe";
import { IStateMappingModel } from "../types/IStateMappingModel";

describe("State Mapping Model", () => {
  const mappingModel =
    container.resolve<IStateMappingModel>("StateMappingModel");

  it("Creating State Mapping Model", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: "uint256",
      name: "myMapping",
    });

    const expected = {
      type: "address",
      typeName: "uint256",
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating State Mapping with custom types", () => {
    const mapping = mappingModel.execute({
      customType: "User",
      customTypeName: "MyContract",
      name: "myMapping",
      scope: "public",
    });

    const expected = {
      type: "User",
      typeName: "MyContract",
      name: "myMapping",
      scope: "public",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating State Mapping with array type", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: { arrayType: "uint256", arraySize: 5 },
      name: "myMapping",
    });

    const expected = {
      type: "address",
      typeName: { arrayType: "uint256", arraySize: 5 },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating State Mapping with array type no size", () => {
    const mapping = mappingModel.execute({
      type: "address",
      typeName: { arrayType: "uint256" },
      name: "myMapping",
    });

    const expected = {
      type: "address",
      typeName: { arrayType: "uint256" },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });
});
