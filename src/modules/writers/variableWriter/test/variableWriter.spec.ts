import { IRequest } from "@models/request/types/IRequest";
import { ILocalVariable } from "@models/variable/types/ILocalVariable";
import createVariableWriter from "../implementations/default";

describe.only("Variable Writer", () => {
  const variableWriter = createVariableWriter();
  it("Writing Variable", () => {
    const variable: ILocalVariable = {
      statement: "variable",
      name: "age",
      type: "uint",
      value: "20",
    };

    const expected = "uint age = 20;";
    const result = variableWriter.write(variable, (request: IRequest) => {
      expect(request).toHaveProperty("functions", []);
      expect(request).toHaveProperty("events", []);
      expect(request).toHaveProperty("text_returns", "");
    });

    expect(result).toMatch(expected);
  });
});
