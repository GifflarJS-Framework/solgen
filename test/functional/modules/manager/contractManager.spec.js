const createContractManager = require("../../../../src/modules/manager/contractManager");
const helpers = require("../../../../src/utils/helpers");
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
    assert.equal(expected_model, gContract.toString());
  });

  // MODELING 2
  it("Modeling Controller", () => {
    // Modeling Variables
    gContractController.createVariable("address[]", "contracts", "public");
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
      //.setVariable("address", "newContract", "new DHT11(_owner)")
      .setContractVariable("newContract", "DHT11", ["_owner"])
      .setCallMethod("contracts", "push", "newContract")
      .setAssignment("counter", "counter + 1");

    gContractController
      .createFunction("getLastContract", "public")
      .setOutput("_contract")
      .setVariable("address", "_contract", "address(0)")
      .beginIf("counter > 0")
      .setAssignment("_contract", "contracts[counter - 1]")
      .endIf()
      .beginElse()
      .setAssignment("_contract", "contracts[0]")
      .endIf();

    // Asserting the result
    assert.equal(expected_complete_model, JSON.stringify(manager.models));
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
    const compiled = manager.compile((errors) => {
      errors.map((e) => {
        // console.log(e);
      });
    });
    const expected_json = JSON.stringify(solc.compile(expected_code, 1));
    const actual_json = JSON.stringify(compiled);

    assert.equal(expected_json, actual_json);
  }).timeout(0);

  // DEPLOYING
  it("Deploying", async () => {
    const instance = await manager.deploy(
      "Controller",
      accounts[0],
      [],
      4000000
    );
    assert.ok(instance.options.address, "should have a deployed address.");
  }).timeout(0);
});
