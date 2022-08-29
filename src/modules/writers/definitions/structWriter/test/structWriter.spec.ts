import { IStructModel } from "@models/definitions/struct/types/IStructModel";
import { container } from "tsyringe";
import { IStructWriter } from "../types/IStructWriter";

describe("Struct Writer", () => {
  const structModel = container.resolve<IStructModel>("StructModel");
  const structWriter = container.resolve<IStructWriter>("StructWriter");

  it("Writing", () => {
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

    const result = structWriter.write(struct);
    const expected = `struct MyType {\nstring name;\nmapping(address => uint256) balances;\n}`;

    expect(result).toEqual(expected);
  });
});
