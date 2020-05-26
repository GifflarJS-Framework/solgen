const createFunctionModel = require("../../src/modules/models/function");
const assert = require("assert");

describe("Function Model", () => {
  it("Creating", () => {
    let expected = {
      name: "myFunction",
      isConstructor: false,
      inputs: [
        {
          name: "message",
          type: "string",
        },
      ],
      outputs: ["message"],
      content: [
        {
          statement: "assignment",
          variable: "message",
          value: "_message",
        },
        {
          statement: "if",
          condition: "val == 1",
          content: [
            {
              statement: "assignment",
              variable: "message",
              value: "_message",
            },
          ],
        },
      ],
    };

    // Creating function
    myFunction = createFunctionModel("myFunction");

    // Setting up properties
    myFunction
      .setInput("string", "message")
      .setOutput("message")
      .setAssignment("message", "_message")
      .beginIf("val == 1")
      .setAssignment("message", "_message")
      .endIf();

    // Asserting result
    const result = myFunction.toString();
    expected = JSON.stringify(expected);
    assert.equal(result, expected);
  });
});
