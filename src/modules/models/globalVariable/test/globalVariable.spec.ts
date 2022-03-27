import createIfModel from "../implementations/default";
import { IGlobalVariable } from "../types/IGlobalVariable";

describe("Global Variable Model", () => {
  it("Creating", () => {
    const expected: IGlobalVariable = {
      statement: "global_variable",
      type: "uint",
      name: "age",
      scope: "private",
      value: "20",
      setMethod: true,
    };
    const model = createIfModel({
      name: "age",
      scope: "private",
      type: "uint",
      setMethod: true,
      value: "20",
    });

    const result = JSON.stringify(model);

    expect(result).toEqual(JSON.stringify(expected));
  });
});
