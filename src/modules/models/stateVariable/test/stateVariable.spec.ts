import { container } from "tsyringe";
import { IStateVariable } from "../types/IStateVariable";
import { IStateVariableModel } from "../types/IStateVariableModel";

describe("State Variable Model", () => {
  it("Creating", () => {
    const stateVariableModel: IStateVariableModel =
      container.resolve("StateVariableModel");

    const expected: IStateVariable = {
      statement: "state_variable",
      type: "uint",
      name: "age",
      scope: "private",
      value: "20",
    };
    const model = stateVariableModel.execute({
      name: "age",
      scope: "private",
      type: "uint",
      value: "20",
    });

    const result = JSON.stringify(model);

    expect(result).toEqual(JSON.stringify(expected));
  });
});
