import { container } from "tsyringe";
import { ITryModel } from "../types/ITryModel";

describe("TryModel", () => {
  const tryModel = container.resolve<ITryModel>("TryModel");

  it("Creating Try", () => {
    const _try = tryModel.execute({
      expression: {
        methodCall: {
          variable: "MyContract",
          method: "add",
          args: ["value"],
        },
      },
      parameters: [{ type: "uint256", name: "arg" }],
    });
    const expected = {
      statement: "try",
      expression: {
        methodCall: {
          variable: "MyContract",
          method: "add",
          args: ["value"],
        },
      },
      parameters: [{ type: "uint256", name: "arg" }],
      content: [],
    };

    expect(JSON.stringify(_try)).toEqual(JSON.stringify(expected));
  });
});
