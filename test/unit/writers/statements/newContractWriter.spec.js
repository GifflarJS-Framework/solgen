const assert = require("assert");
const createNewContractWriter = require("@writers/statements/newContractWriter");
const helpers = require("@utils/helpers");

describe("NewContractWriter", () => {
  let newContractWriter = null;

  it("when imported shouldn't throw error", () => {
    assert.doesNotThrow(() => {
      newContractWriter = createNewContractWriter();
    }, "Shouldn't throw error.");

    assert.ok(newContractWriter, "returned value should be valid.");

    assert.ok(
      helpers.isObject(newContractWriter),
      "returned value should be object."
    );
  });

  it("should have write property", () => {
    assert.ok(newContractWriter.write, "Should have 'write' property.");
  });

  describe("#write()", () => {
    const json = {
      statement: "newcontract",
      contractName: "Contract",
      args: ["_owner"],
    };

    it("should return the right text", () => {
      const actual = newContractWriter.write(json);
      const expected = "new Contract(_owner)";

      assert.equal(
        actual,
        expected,
        "the returned text should be: ['" + expected + "']"
      );
    });
  });
});
