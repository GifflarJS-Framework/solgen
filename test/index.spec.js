const createContract = require("../src/index");
const helpers = require("../src/utils/helpers");
const assert = require("assert");
const expected_model = JSON.stringify(require("./examples/contract-1.json"));

describe("Test Contract", () => {
  let gContract = null;
  it("Object creation", () => {
    gContract = createContract("MyContract");

    const event = gContract
      .createEvent("temperatureOverflow")
      .setInput("string", "_message");

    gContract.createVariable("string", "tmp", "public");

    // Modeling
    gContract
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

    assert.equal(expected_model, gContract.json());

    //console.log(gContract.write());
    //console.log(gContract.compile());
    assert.ok(!helpers.isObjEmpty(gContract), "Error while creating gContract");
  }).timeout(0);
});
