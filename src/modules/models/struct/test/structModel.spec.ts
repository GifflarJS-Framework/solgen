import { container } from "tsyringe";
import { IStructModel } from "../types/IStructModel";

describe("Struct Model", () => {
  const structModel = container.resolve<IStructModel>("StructModel");

  it("Creating Struct", () => {
    const struct = structModel.execute({
      identifier: "MyType",
      variables: [{ statement: "variable", type: "string", name: "name" }],
      mappings: [
        {
          statement: "mapping",
          type: "address",
          typeName: "uint256",
          name: "balances",
        },
      ],
    });

    const expected = {
      statement: "struct",
      identifier: "MyType",
      variables: [{ statement: "variable", type: "string", name: "name" }],
      mappings: [
        {
          statement: "mapping",
          type: "address",
          typeName: "uint256",
          name: "balances",
        },
      ],
    };

    expect(JSON.stringify(struct)).toEqual(JSON.stringify(expected));
  });
});