const createContract = require("../src/index");
const createCompiler = require("../src/modules/compiler");
const helpers = require("../src/utils/helpers");
const assert = require("assert");
const fs = require("fs");
const writing_path = __dirname + "/examples/writing/";
const solc = require("solc");

describe("Test Contract", () => {
  // Expected values
  const expected_model = JSON.stringify(
    require("./examples/modeling/contract-3.json")
  );
  let expected_code = "";

  // Actual values
  let actual_code = "";
  let gContract = null;
  it("Object creation", () => {
    gContract = createContract("MyContract");
    assert.ok(!helpers.isObjEmpty(gContract), "Error while creating gContract");
  });

  // MODELING
  it("Modeling", () => {
    // Modeling Variables
    gContract.createVariable("string", "message", "public", true);

    // Modeling Functions
    gContract
      .createConstructor("public")
      .setInput("string", "_message")
      .setAssignment("message", "_message")
      .setCallEvent("myEvent", ["message"]);

    // Asserting the result
    assert.equal(expected_model, gContract.json());
  });

  // WRITING
  it("Writing", () => {
    actual_code = gContract.write();

    expected_code = fs.readFileSync(writing_path + "contract-3.txt", {
      encoding: "utf8",
    });

    assert.equal(expected_code, actual_code);
  });

  // COMPILING
  it("Compiling", () => {
    const compiler = createCompiler();
    const expected_interface = JSON.stringify(solc.compile(expected_code, 1));
    const actual_interface = JSON.stringify(compiler.compile(actual_code));

    assert.equal(expected_interface, actual_interface);
  }).timeout(0);

  // DEPLOYING
  it("Deploying", () => {});
});
