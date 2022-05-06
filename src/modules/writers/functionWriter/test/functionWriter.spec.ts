import { IFunctionJson } from "@models/function/types/IFunctionJson";
import { container } from "tsyringe";
import { IFunctionWriter } from "../types/IFunctionWriter";

describe("Contract Writer", () => {
  it("Writing Contract", () => {
    const functionWriter: IFunctionWriter = container.resolve("FunctionWriter");

    const myFunction: IFunctionJson = {
      name: "MyFunction",
      scope: "public",
      isConstructor: false,
      inputs: [],
      modifiers: [],
      outputs: ["age"],
      content: [
        { statement: "variable", name: "age", type: "uint", value: "18" },
      ],
    };

    const expected =
      "//FUNCTIONS\nfunction MyFunction() public returns (uint) {\nuint age = 18;\nreturn (age);\n}";
    const result = functionWriter.write([myFunction], []);

    expect(result).toMatch(expected);
  });
});
