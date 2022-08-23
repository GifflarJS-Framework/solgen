import { ITryModel } from "@models/try/types/ITryModel";
import { container } from "tsyringe";
import { ITryWriter } from "../types/ITryWriter";

describe("TryWriter", () => {
  const tryModel = container.resolve<ITryModel>("TryModel");
  const tryWriter = container.resolve<ITryWriter>("TryWriter");

  it("Writing", () => {
    const _try = tryModel.execute({
      expression: {
        statement: "method_call",
        variable: "MyContract",
        method: "add",
        value: "value",
      },
      parameters: [{ type: "uint256", name: "arg" }],
    });
    const result = tryWriter.write(_try);
    const expected = `try MyContract.add(value) returns(uint256 arg){\n}`;

    expect(result).toEqual(expected);
  });
});
