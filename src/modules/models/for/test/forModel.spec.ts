import { container } from "tsyringe";
import { IForModel } from "../types/IForModel";

describe("Test For Model", () => {
  const forModel: IForModel = container.resolve("ForModel");

  it("Creating For Model", () => {
    const expected = {
      statement: "for",
      assignment: {
        statement: "assignment",
        variable: "i",
        value: { statement: "expression", value: "0" },
      },
      condition: "i < 100",
      expression: { statement: "expression", value: "i++" },
      content: [],
    };

    const result = forModel.execute({
      assignment: {
        statement: "assignment",
        variable: "i",
        value: { statement: "expression", value: "0" },
      },
      condition: "i < 100",
      expression: { statement: "expression", value: "i++" },
    });

    expect(result).toEqual(expected);
  });
});
