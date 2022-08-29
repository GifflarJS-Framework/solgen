import { container } from "tsyringe";
import { IStructModel } from "../types/IStructModel";

describe("Struct Model", () => {
  const structModel = container.resolve<IStructModel>("StructModel");

  it("Creating Struct", () => {
    const struct = structModel.execute({
      identifier: "MyType",
      variables: [{ type: "string", name: "name" }],
      mappings: [
        {
          type: { regularType: "address" },
          typeName: { regularType: "uint256" },
          name: "balances",
        },
      ],
    });

    const expected = {
      identifier: "MyType",
      variables: [{ type: "string", name: "name" }],
      mappings: [
        {
          type: { regularType: "address" },
          typeName: { regularType: "uint256" },
          name: "balances",
        },
      ],
    };

    expect(JSON.stringify(struct)).toEqual(JSON.stringify(expected));
  });
});
