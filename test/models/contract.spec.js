const createContractModel = require("../../src/modules/models/contract");
const assert = require("assert");

describe.only("Contract Model", () => {
  it("Creating", () => {
    let expected = {
      name: "MyContract",
      contract: {
        variables: [],
        functions: [
          {
            name: "myFunction",
            isConstructor: false,
            inputs: [{ name: "_message", type: "string" }],
            outputs: ["message"],
            content: [
              {
                statement: "callevent",
                name: "temperatureOverflow",
                inputs: [{ name: "_message", type: "string" }],
              },
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
              },
            ],
          },
        ],
      },
    };

    const contractModel = createContractModel("MyContract");
    const event = contractModel
      .createEvent("temperatureOverflow")
      .addInput("string", "_message");

    contractModel
      .createFunction("myFunction")
      .setInput("string", "_message")
      .setOutput("message")
      .setCallEvent(event)
      .setAssignment("message", "_message")
      .beginIf("val == 1")
      .beginIf("val == 1")
      .setAssignment("message", "_message")
      .endIf()
      .endIf();

    const actual = JSON.stringify(contractModel);
    expected = JSON.stringify(expected);
    assert.equal(actual, expected);
  });
});
