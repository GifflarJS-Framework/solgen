const createContractManager = require("@management/contractManager");
const helpers = require("@utils/helpers");
const { createConfig } = require("@test/lib/compile_config");
const assert = require("assert");
const fs = require("fs");
const writing_path = __dirname + "/../../../examples/writing/";
const solc = require("solc");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { execSync } = require("child_process");

let accounts = [];
before(async () => {
  accounts = await web3.eth.getAccounts();
});

describe("Test ContractManager", () => {
  // Expected values
  const expected_model = JSON.stringify(
    require("../../../examples/modeling/contract-4.json")
  );
  const expected_complete_model = JSON.stringify(
    require("../../../examples/modeling/contract-5.json")
  );
  let expected_code = "";

  // Actual values
  let actual_code = "";
  const manager = createContractManager(web3);
  let gContract = null;
  let gContractController = null;

  it("Object creation", () => {
    // Creating contract
    gContract = manager.createContract("DHT11");
    gContractController = manager.createContract("Controller");
    assert.ok(!helpers.isObjEmpty(gContract), "Error while creating gContract");
    assert.ok(
      !helpers.isObjEmpty(gContractController),
      "Error while creating gContractController"
    );
  });

  // MODELING
  it("Modeling DHT11", () => {
    // Creating the variables
    gContract.createVariable("address", "manager", "public");
    gContract.createVariable("string", "name", "public", true);
    gContract.createVariable("uint256", "value1", "public");
    gContract.createVariable("uint256", "max_value1", "public");
    gContract.createVariable("uint256", "min_value1", "public");

    // Creating constructor
    gContract
      .createConstructor("public")
      .setInput("address", "_owner")
      .setAssignment("manager", "_owner")
      .setAssignment("name", '"DHT11"');

    // Creating a new function
    gContract
      .createFunction("setValue", "public")
      .setInput("uint256", "_val")
      .setInput("uint256", "_valueId")
      .beginIf("_valueId == 1")
      .setAssignment("value1", "_val")
      .beginIf("value1 >= max_value1")
      .setCallEvent("temperatureOverflow", ["value1", "max_value1"])
      .endIf()
      .beginElseIf("value1 <= min_value1")
      .setCallEvent("temperatureUnderflow", ["value1", "min_value1"])
      .endElseIf()
      .endIf();

    // Asserting the result
    assert.equal(
      gContract.toString(),
      JSON.stringify(JSON.parse(expected_model)[0])
    );
  });

  // MODELING 2
  it("Modeling Controller", () => {
    // Modeling Variables
    gContractController.createVariable("DHT11[]", "contracts", "public");
    gContractController.createVariable(
      "uint256",
      "counter",
      "private",
      false,
      "0"
    );

    // Modeling Functions
    gContractController
      .createFunction("createContract", "public")
      .setInput("address", "_owner")
      .setContractVariable("newContract", "DHT11", ["_owner"])
      .setCallMethod("contracts", "push", "newContract")
      .setAssignment("counter", "counter + 1");

    gContractController
      .createFunction("getLastContract", "public")
      .setOutput("_contract")
      .setVariable("DHT11", "_contract", "")
      .beginIf("counter > 0")
      .setAssignment("_contract", "contracts[counter - 1]")
      .endIf()
      .beginElse()
      .setAssignment("_contract", "contracts[0]")
      .endIf();

    // Asserting the result
    assert.equal(expected_complete_model, JSON.stringify(manager.contracts));
  });

  // WRITING
  it("Writing", () => {
    // Testing if writing two times the code breaks
    manager.write();
    // Writing again
    actual_code = manager.write();

    expected_code = fs.readFileSync(writing_path + "contract-5.txt", {
      encoding: "utf8",
    });

    assert.equal(actual_code, expected_code);
  });

  //   it("smartcheck it", () => {
  //     const filepath = __dirname + "/contract.sol";
  //     fs.writeFileSync(filepath, actual_code, {
  //       encoding: "utf8",
  //       flag: "w",
  //     });
  //     const result = execSync("smartcheck -p " + filepath).toString();
  //     console.log(result);
  //     execSync("rm " + filepath);
  //   }).timeout(0);

  // COMPILING
  it("Compiling", () => {
    const compiled = manager.compileAll((errors) => {
      if (Array.isArray(errors)) {
        errors.map((e) => {
          console.log(e.formattedMessage);
        });
      }
    });
    const config = createConfig(expected_code);
    const expected_json = solc.compile(config);
    const actual_json = JSON.stringify(compiled);

    assert.equal(actual_json, expected_json);
  }).timeout(0);

  // DEPLOYING
  it("Deploying Controller", async () => {
    const instance = await manager.deploy(
      "Controller",
      accounts[0],
      [],
      4000000
    );
    assert.ok(instance.options, "should have a options property.");
    assert.ok(instance.options.address, "should have a deployed address.");
  }).timeout(0);
});
