import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { container } from "tsyringe";
import { IStateVariableWriter } from "../types/IStateVariableWriter";

describe("State Variable Writer", () => {
  const variableWriter: IStateVariableWriter = container.resolve(
    "StateVariableWriter"
  );

  it("Writing State Variable", () => {
    const variable: IStateVariable = {
      statement: "state_variable",
      name: "age",
      type: "uint",
      value: "20",
      scope: "private",
    };

    const expected = "//VARIABLES\nuint private age = 20;";

    const result = variableWriter.write([variable]);

    expect(result).toMatch(expected);
  });

  it("Writing many variables", () => {
    const variables: IStateVariable[] = [
      {
        statement: "state_variable",
        name: "age",
        type: "uint",
        value: "20",
        scope: "private",
      },
      {
        statement: "state_variable",
        name: "name",
        type: "string",
        value: "",
        scope: "public",
      },
    ];

    const expected = "//VARIABLES\nuint private age = 20;\nstring public name;";

    const result = variableWriter.write(variables);

    expect(result).toMatch(expected);
  });

  it("Writing with state mutability", () => {
    const variables: IStateVariable[] = [
      {
        statement: "state_variable",
        name: "age",
        type: "uint",
        value: "20",
        scope: "private",
        stateMutability: "constant",
      },
      {
        statement: "state_variable",
        name: "name",
        type: "string",
        scope: "public",
        stateMutability: "immutable",
      },
    ];

    const expected =
      "//VARIABLES\nuint private constant age = 20;\nstring public immutable name;";

    const result = variableWriter.write(variables);

    expect(result).toMatch(expected);
  });
});
