require("module-alias/register");
const createContractModel = require("@models/contract");
const assert = require("assert");
const expected = JSON.stringify(require("@examples/modeling/contract-1.json"));

describe("Contract Model", () => {
  it("Modeling example contract-1", () => {
    // Starting the contract
    const contractModel = createContractModel("MyContract");

    // Creating the variables
    contractModel.createVariable("address", "manager", "public");
    contractModel.createVariable("string", "name", "public", true);
    contractModel.createVariable("uint256", "value1", "public");
    contractModel.createVariable("uint256", "max_value1", "public");
    contractModel.createVariable("uint256", "min_value1", "public");

    // Creating constructor
    contractModel
      .createConstructor("public")
      .setInput("address", "_owner")
      .setAssignment("manager", "_owner")
      .setAssignment("name", "DHT11");

    // Creating a new function
    contractModel
      .createFunction("setValue", "public")
      .setInput("uint256", "_val")
      .setInput("uint256", "_valueId")
      .beginIf("valueId == 1")
      .setAssignment("value1", "_val")
      .beginIf("value1 >= max_value1")
      .setCallEvent("temperatureOverflow", ["value1", "max_value1"])
      .endIf()
      .beginElseIf("value1 <= min_value1")
      .setCallEvent("temperatureUnderflow", ["value1", "min_value1"])
      .endElseIf()
      .endIf();

    // Getting the actual contractModel created
    const actual = contractModel.toString();

    // Asserting the result
    assert.equal(actual, expected);
  });
});
