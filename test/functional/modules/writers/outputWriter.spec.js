const createOutputWriter = require("../../../../src/modules/writers/statements/outputWriter");
const assert = require("assert");

const json = {
  variables: [
    {
      type: "string",
      scope: "public",
      name: "message",
      setMethod: true,
    },
    {
      type: "string[]",
      scope: "public",
      name: "messages",
      setMethod: true,
    },
  ],
  outputs: ["message", "messages"],
};

describe("Output Writer", () => {
  const outputWriter = createOutputWriter(json.variables);
  it("Writing Outputs", () => {
    // Expected values
    const expected_return = "return (message, messages);\n";
    const expected_returns = "returns (string, string[])";

    // Executing output writing
    let text_returns = "";
    const text_return = outputWriter.write(json.outputs, (_request) => {
      text_returns = _request.text_returns;
    });

    // Asserting values
    assert.equal(text_return, expected_return, "Fail on return value");
    assert.equal(text_returns, expected_returns, "Fail on returns value");
  });
});
