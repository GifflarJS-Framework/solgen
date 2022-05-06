import { container } from "tsyringe";
import { IGlobalVariable } from "../types/IGlobalVariable";
import { IGlobalVariableModel } from "../types/IGlobalVariableModel";

describe("Global Variable Model", () => {
  it("Creating", () => {
    const globalVariableModel: IGlobalVariableModel = container.resolve(
      "GlobalVariableModel"
    );

    const expected: IGlobalVariable = {
      statement: "global_variable",
      type: "uint",
      name: "age",
      scope: "private",
      value: "20",
    };
    const model = globalVariableModel.execute({
      name: "age",
      scope: "private",
      type: "uint",
      value: "20",
    });

    const result = JSON.stringify(model);

    expect(result).toEqual(JSON.stringify(expected));
  });
});
