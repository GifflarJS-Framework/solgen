import createForModel from "../implementations/default";

describe("Test For Model", () => {
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

    const result = createForModel({
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
