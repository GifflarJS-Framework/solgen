import { ILocalVariable } from "@models/variable/types/ILocalVariable";
import { container } from "tsyringe";
import { IVariableWriter } from "../types/IVariableWriter";

describe.only("Variable Writer", () => {
  const variableWriter: IVariableWriter = container.resolve("VariableWriter");

  it("Writing Variable", () => {
    const variable: ILocalVariable = {
      statement: "variable",
      name: "age",
      type: "uint",
      value: "20",
    };

    const expected = "uint age = 20";
    const result = variableWriter.write(variable);

    expect(result).toMatch(expected);
  });

  it("Writing Variable with data location", () => {
    const variable: ILocalVariable = {
      statement: "variable",
      name: "age",
      type: "uint",
      dataLocation: "memory",
      value: "20",
    };

    const expected = "uint memory age = 20";
    const result = variableWriter.write(variable);

    expect(result).toMatch(expected);
  });
});
