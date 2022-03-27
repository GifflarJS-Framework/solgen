import createFunctionModel from "../";
const expected = JSON.stringify(
  require("@test/examples/modeling/function-1.json")
);

describe("Function Model", () => {
  it("Creating", () => {
    // Creating function
    const myFunction = createFunctionModel({
      name: "myFunction",
      scope: "public",
    });

    // Setting up properties
    myFunction
      .setInput("string", "_message")
      .setOutput("_message")
      .setAssignment("message", "_message")
      .beginIf("val == 1")
      .setAssignment("message", "_message")
      .endIf();

    // Asserting result
    const result = myFunction.toString();
    expect(result).toEqual(expected);
  });
});
