require("module-alias/register");
const createContractModel = require("@models/contract");
const assert = require("assert");

function createMock() {
  // Returning a test object
  return {
    statement: "mockNewcontract",
  };
}

describe("Contract Model when creating function", () => {
  it("should return the right content", () => {
    // Starting the contract
    const contractModel = createContractModel("MyContract");

    // Setting configuration
    const newContract = createMock();

    // Creating constructor
    contractModel
      .createFunction("public")
      .setInput("address", "_owner")
      .setContractVariable("contract", "Contract", ["_owner"], {
        newContract,
      });

    const actualContent = JSON.stringify(
      contractModel.contract.functions[0].content[0]
    );
    const expectedContent = JSON.stringify({
      statement: "variable",
      type: "Contract",
      name: "contract",
      value: newContract,
    });

    // Asserting the result
    assert.equal(
      actualContent,
      expectedContent,
      "The function content should be: " + expectedContent
    );
  });
});
