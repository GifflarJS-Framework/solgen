import { IFunctionJson } from "@models/function/types/IFunctionJson";
import createFunctionWriter from "../implementations/default";

describe("Contract Writer", () => {
  it("Writing Contract", () => {
    const functionWriter = createFunctionWriter([]);

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
    const result = functionWriter.write([myFunction], (request) => {
      // console.log(request);
    });

    expect(result).toMatch(expected);
  });
});
