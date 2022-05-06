import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IRequest } from "@models/request/types/IRequest";
import { container } from "tsyringe";
import { IGlobalVariableWriter } from "../types/IGlobalVariableWriter";

describe("Global Variable Writer", () => {
  const variableWriter: IGlobalVariableWriter = container.resolve(
    "GlobalVariableWriter"
  );

  it("Writing Global Variable", () => {
    const variable: IGlobalVariable = {
      statement: "global_variable",
      name: "age",
      type: "uint",
      value: "20",
      scope: "private",
    };

    const expected = "//VARIABLES\nuint private age = 20;";
    const functions = [
      {
        name: "setAge",
        scope: "public",
        isConstructor: false,
        inputs: [{ name: "_age", type: "uint" }],
        outputs: [],
        modifiers: [],
        content: [
          {
            statement: "assignment",
            variable: "age",
            value: {
              statement: "expression",
              value: "_age",
            },
          },
        ],
      },
    ];
    const result = variableWriter.write(variable, (request: IRequest) => {
      expect(request).toHaveProperty("functions");
      expect(JSON.stringify(request.functions)).toEqual(
        JSON.stringify(functions)
      );
      expect(request).toHaveProperty("events", []);
      expect(request).toHaveProperty("text_returns", "");
    });

    expect(result).toMatch(expected);
  });

  it("Writing many variables", () => {
    const variables: IGlobalVariable[] = [
      {
        statement: "global_variable",
        name: "age",
        type: "uint",
        value: "20",
        scope: "private",
      },
      {
        statement: "global_variable",
        name: "name",
        type: "string",
        value: "",
        scope: "public",
      },
    ];

    const expected = "//VARIABLES\nuint private age = 20;\nstring public name;";
    const functions = [
      {
        name: "setAge",
        scope: "public",
        isConstructor: false,
        inputs: [{ name: "_age", type: "uint" }],
        outputs: [],
        modifiers: [],
        content: [
          {
            statement: "assignment",
            variable: "age",
            value: {
              statement: "expression",
              value: "_age",
            },
          },
        ],
      },
    ];
    const result = variableWriter.write(variables, (request: IRequest) => {
      expect(request).toHaveProperty("functions");
      expect(JSON.stringify(request.functions)).toEqual(
        JSON.stringify(functions)
      );
      expect(request).toHaveProperty("events", []);
      expect(request).toHaveProperty("text_returns", "");
    });

    expect(result).toMatch(expected);
  });
});
