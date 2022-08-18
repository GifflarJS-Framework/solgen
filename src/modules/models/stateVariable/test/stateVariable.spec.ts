import { container } from "tsyringe";
import { IStateVariable } from "../types/IStateVariable";
import { IStateVariableModel } from "../types/IStateVariableModel";

describe("State Variable Model", () => {
  const stateVariableModel: IStateVariableModel =
    container.resolve("StateVariableModel");

  it("Creating", () => {
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

  it("Creating constant", () => {
    const expected: IStateVariable = {
      statement: "state_variable",
      type: "uint",
      name: "age",
      scope: "private",
      stateMutability: "constant",
      value: "20",
    };
    const model = stateVariableModel.execute({
      name: "age",
      scope: "private",
      type: "uint",
      value: "20",
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

  it("Creating immutable", () => {
    const expected: IStateVariable = {
      statement: "state_variable",
      type: "uint",
      name: "age",
      scope: "private",
      stateMutability: "immutable",
    };
    const model = stateVariableModel.execute({
      name: "age",
      type: "uint",
      scope: "private",
      stateMutability: "immutable",
    });

    const result = JSON.stringify(model);

    expect(result).toEqual(JSON.stringify(expected));
  });
});
