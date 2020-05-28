const createFunctionModel = require("../../src/modules/models/function");
const assert = require("assert");
const expected = JSON.stringify(
  require("../examples/modeling/function-1.json")
);

describe("Function Model", () => {
  it("Creating", () => {
    // Creating function
    myFunction = createFunctionModel("myFunction", "public");

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
    assert.equal(result, expected);
  });
});
