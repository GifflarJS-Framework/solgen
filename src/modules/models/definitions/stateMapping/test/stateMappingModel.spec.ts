import { container } from "tsyringe";
import { IStateMappingModel } from "../types/IStateMappingModel";

describe("State Mapping Model", () => {
  const mappingModel =
    container.resolve<IStateMappingModel>("StateMappingModel");

  it("Creating State Mapping Model", () => {
    const mapping = mappingModel.execute({
      type: { regularType: "address" },
      typeName: { regularType: "uint256" },
      name: "myMapping",
    });

    const expected = {
      type: { regularType: "address" },
      typeName: { regularType: "uint256" },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating State Mapping with custom types", () => {
    const mapping = mappingModel.execute({
      type: { customType: "User" },
      typeName: { customType: "MyContract" },
      name: "myMapping",
      scope: "public",
    });

    const expected = {
      type: { customType: "User" },
      typeName: { customType: "MyContract" },
      name: "myMapping",
      scope: "public",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating State Mapping with array type", () => {
    const mapping = mappingModel.execute({
      type: { regularType: "address" },
      typeName: {
        array: { arrayType: { regularType: "uint256" }, arraySize: 5 },
      },
      name: "myMapping",
    });

    const expected = {
      type: { regularType: "address" },
      typeName: {
        array: { arrayType: { regularType: "uint256" }, arraySize: 5 },
      },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });

  it("Creating State Mapping with array type no size", () => {
    const mapping = mappingModel.execute({
      type: { regularType: "address" },
      typeName: { array: { arrayType: { regularType: "uint256" } } },
      name: "myMapping",
    });

    const expected = {
      type: { regularType: "address" },
      typeName: { array: { arrayType: { regularType: "uint256" } } },
      name: "myMapping",
    };

    expect(JSON.stringify(mapping)).toEqual(JSON.stringify(expected));
  });
});
