const assert = require("assert");
const createNewContractModel = require("@models/newcontract");

describe("newContract", () => {
  it("Initial Properties", () => {
    const expected = {
      variable: "contract",
      contractName: "Contract",
      args: ["_owner"],
    };

    // Creating new contract
    const newContract = createNewContractModel(
      expected.variable,
      expected.contractName,
      expected.args
    );

    // Asserting properties
    // VARIABLE
    assert.equal(
      newContract.variable,
      expected.variable,
      "Property shoud be equal to '" + expected.variable + "'"
    );

    // CONTRACT NAME
    assert.equal(
      newContract.contractName,
      expected.contractName,
      "Property shoud be equal to '" + expected.contractName + "'"
    );

    // ARGS
    assert.equal(
      newContract.args,
      expected.args,
      "Property shoud be equal to '" + expected.args + "'"
    );
  });
});
