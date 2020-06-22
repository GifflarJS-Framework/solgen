const assert = require("assert");
const createVariableWriter = require("@writers/variableWriter");
const helpers = require("@utils/helpers");

describe("VariableWriter", () => {
  let variableWriter = null;

  it("when imported shouldn't throw error", () => {
    assert.doesNotThrow(() => {
      variableWriter = createVariableWriter();
    }, "Shouldn't throw error.");

    assert.ok(variableWriter, "returned value should be valid.");

    assert.ok(
      helpers.isObject(variableWriter),
      "returned value should be object."
    );
  });

  it("should have write property", () => {
    assert.ok(variableWriter.write, "Should have 'write' property.");
  });

  describe("#write()", () => {
    const json = {
      statement: "variable",
      type: "address",
      name: "contract",
      value: {
        statement: "newcontract",
        contractName: "Contract",
        args: ["_owner"],
      },
    };

    it("should return the right text", () => {
      const actual = variableWriter.write(json);
      const expected = "address contract = new Contract(_owner);\n";

      assert.equal(
        actual,
        expected,
        "the returned text should be: ['" + expected + "']"
      );
    });

    it("when wrong value statement name should throw error", () => {
      json.value.statement = "wrong_name";
      assert.throws(() => variableWriter.write(json), "should throw error");
    });
  });
});
