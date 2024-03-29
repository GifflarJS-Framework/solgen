import { container } from "tsyringe";
import { IStateVariable } from "../types/IStateVariable";
import { IStateVariableModel } from "../types/IStateVariableModel";

describe("State Variable Model", () => {
  const stateVariableModel: IStateVariableModel =
    container.resolve("StateVariableModel");

  it("Creating", () => {
    const expected: IStateVariable = {
      type: "uint",
      name: "age",
      scope: "private",
      expressionValue: {
        customExpression: "20",
      },
    };
    const model = stateVariableModel.execute({
      name: "age",
      scope: "private",
      type: "uint",
      expressionValue: {
        customExpression: "20",
      },
    });

    const result = JSON.stringify(model);

    expect(result).toEqual(JSON.stringify(expected));
  });

  it("Creating constant", () => {
    const expected: IStateVariable = {
      type: "uint",
      name: "age",
      scope: "private",
      stateMutability: "constant",
      expressionValue: {
        customExpression: "20",
      },
    };
    const model = stateVariableModel.execute({
      name: "age",
      scope: "private",
      type: "uint",
      expressionValue: {
        customExpression: "20",
      },
      stateMutability: "constant",
    });

    const result = JSON.stringify(model);

    expect(result).toEqual(JSON.stringify(expected));
  });

  it("Creating constant without value (must throw)", () => {
    expect(() => {
      stateVariableModel.execute({
        name: "age",
        scope: "private",
        type: "uint",
        stateMutability: "constant",
      });
    }).toThrow("A constant must have an initial value.");
  });
});
