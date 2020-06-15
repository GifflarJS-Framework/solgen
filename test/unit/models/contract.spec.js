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
      .setNewContract("contract", "Contract", ["_owner"], { newContract });

    // Getting the actual contractModel created
    const actual = JSON.stringify(
      contractModel.contract.functions[0].content[0]
    );

    const actualContent = contractModel.contract.functions[0].content[0];
    const expectedContent = newContract;

    // Asserting the result
    assert.equal(
      actualContent,
      expectedContent,
      "The function content should be: " + expectedContent
    );
  });
});
