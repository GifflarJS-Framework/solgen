import { container } from "tsyringe";
import { IFunctionModel } from "../types/IFunctionModel";

const expected = JSON.stringify(
  require("@test/examples/modeling/function-1.json")
);

describe("Function Model", () => {
  const functionModel: IFunctionModel = container.resolve("FunctionModel");

  it("Creating", () => {
    // Creating function
    const myFunction = functionModel.execute({
      name: "myFunction",
      scope: "public",
    });

    // Setting up properties
    myFunction
      .setInput({ regularType: "string" }, "_message")
      .setOutput({ regularType: "string" })
      .setAssignment("message", { customExpression: "_message" })
      .beginIf("val == 1")
      .setAssignment("message", { customExpression: "_message" })
      .endIf();

    // Asserting result
    const result = myFunction.toString();
    expect(result).toEqual(expected);
  });
});
