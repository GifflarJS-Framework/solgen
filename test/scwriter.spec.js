const assert = require("assert");
const Writer = require("../src/modules/scwriter");
const helpers = require("../src/lib/helpers");

const json = {
  name: "MyContract",
  content: {
    variables: [
      {
        type: "uint",
        scope: "public",
        name: "message"
      }
    ]
  }
};

describe("Test smcwriter", () => {
  let writer = null;
  it("Object creation", () => {
    writer = Writer();
    assert.ok(!helpers.isObjEmpty(writer), "Error while creating writer");
  });

  it("writer.write()", () => {
    assert.ok(writer, "Writer not defined");
    const contract_text = writer.write(json);
    assert.ok(contract_text, "No contract wrote");
  });
});
