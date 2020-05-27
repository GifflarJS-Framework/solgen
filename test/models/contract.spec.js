const createContractModel = require("../../src/modules/models/contract");
const assert = require("assert");
const expected = JSON.stringify(require("../examples/contract-1.json"));

describe("Contract Model", () => {
  it("Creating", () => {
    const contractModel = createContractModel("MyContract");
    const event = contractModel
      .createEvent("temperatureOverflow")
      .setInput("string", "_message");

    contractModel.createVariable("string", "tmp", "public");

    contractModel
      .createFunction("myFunction", "public")
      .setInput("string", "_message")
      .setOutput("message")
      .setVariable("string", "tmp")
      .setCallEvent(event)
      .setAssignment("message", "_message")
      .beginIf("val == 1")
      .beginIf("val == 1")
      .setAssignment("message", "_message")
      .endIf()
      .endIf();

    const actual = JSON.stringify(contractModel);
    assert.equal(actual, expected);
  });
});
