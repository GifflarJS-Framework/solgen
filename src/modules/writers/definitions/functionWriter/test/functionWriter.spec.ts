import { IFunctionJson } from "@models/definitions/function/types/IFunctionJson";
import { container } from "tsyringe";
import { IFunctionWriter } from "../types/IFunctionWriter";

describe("Contract Writer", () => {
  it("Writing Contract", () => {
    const functionWriter: IFunctionWriter = container.resolve("FunctionWriter");

    const myFunction: IFunctionJson = {
      name: "MyFunction",
      scope: "public",
      isConstructor: false,
      stateMutability: "view",
      inputs: [],
      modifiers: [{ name: "onlyOwner", args: [] }],
      outputs: [{ type: "uint" }],
      content: [
        {
          statement: "variable",
          name: "age",
          type: "uint",
          expressionValue: {
            customExpression: "18",
          },
        },
      ],
    };

    const expected =
      "//FUNCTIONS\nfunction MyFunction() public view onlyOwner returns(uint){\nuint age = 18;\n}\n\n";
    const result = functionWriter.write([myFunction]);

    expect(result).toMatch(expected);
  });
});
