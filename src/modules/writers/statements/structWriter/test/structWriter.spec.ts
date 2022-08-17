import { IStructModel } from "@models/struct/types/IStructModel";
import { container } from "tsyringe";
import { IStructWriter } from "../types/IStructWriter";

describe("Struct Writer", () => {
  const structModel = container.resolve<IStructModel>("StructModel");
  const structWriter = container.resolve<IStructWriter>("StructWriter");

  it("Writing", () => {
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

    const result = structWriter.write(struct);
    const expected = `struct MyType {\nstring name;\nmapping(address => uint256) balances;\n}`;

    expect(result).toEqual(expected);
  });
});
