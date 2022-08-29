import { container } from "tsyringe";
import { IForModel } from "../types/IForModel";

describe("Test For Model", () => {
  const forModel: IForModel = container.resolve("ForModel");

  it("Creating For Model", () => {
    const expected = {
      statement: "for",
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        value: "0",
      },
      condition: "i < 100",
      expression: { statement: "expression", value: "i++" },
      content: [],
    };

    const result = forModel.execute({
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        value: "0",
      },
      condition: "i < 100",
      expression: { statement: "expression", value: "i++" },
    });

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it("Creating For Model without variable", () => {
    const expected = {
      statement: "for",
      condition: "i < 100",
      expression: { statement: "expression", value: "i++" },
      content: [],
    };

    const result = forModel.execute({
      condition: "i < 100",
      expression: { statement: "expression", value: "i++" },
    });

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it("Creating For Model without condition", () => {
    const expected = {
      statement: "for",
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        value: "0",
      },
      expression: { statement: "expression", value: "i++" },
      content: [],
    };

    const result = forModel.execute({
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        value: "0",
      },
      expression: { statement: "expression", value: "i++" },
    });

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it("Creating For Model without expression", () => {
    const expected = {
      statement: "for",
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        value: "0",
      },
      condition: "i < 100",
      content: [],
    };

    const result = forModel.execute({
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        value: "0",
      },
      condition: "i < 100",
    });

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it("Creating For Model without any parameter", () => {
    const expected = {
      statement: "for",
      content: [],
    };

    const result = forModel.execute({});

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});
