const assert = require("assert");
const createNewContractModel = require("@models/newcontract");

describe("newContract", () => {
  it("Initial Properties", () => {
    const expected = {
      statement: "newcontract",
      contractName: "Contract",
      args: ["_owner"],
    };

    // Creating new contract
    const newContract = createNewContractModel(
      expected.contractName,
      expected.args
    );

    // Asserting properties
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
