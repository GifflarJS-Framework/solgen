require("module-alias/register");
const assert = require("assert");
const createDeployer = require("@deployer/deployer");
const { createConfig } = require("@test/lib/compile_config");
const helpers = require("@utils/helpers");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const fs = require("fs");
const solc = require("solc");
const writing_path = __dirname + "/../../../examples/writing/";

let accounts = [];
before(async () => {
  accounts = await web3.eth.getAccounts();
});

describe("Deployer", async () => {
  const expected_code = fs.readFileSync(writing_path + "contract-5.txt", {
    encoding: "utf8",
  });

  let deployer = null;
  it("should return an object", () => {
    deployer = createDeployer();
    assert.ok(helpers.isObject(deployer), "should return an object.");
  });

  it("should return valid object with deploy function", () => {
    deployer = createDeployer(web3);
    assert.ok(helpers.isObject(deployer), "should return valid object.");
  });

  it("should have deploy function", () => {
    assert.ok(deployer.deploy, "should have deploy function.");
  });

  it("should have retrieve function", () => {
    assert.ok(deployer.retrieve, "should have deploy function.");
  });

  it("should have setWeb3 function", () => {
    assert.ok(deployer.setWeb3, "should have deploy function.");
  });

  it("should have getWeb3 function", () => {
    assert.ok(deployer.getWeb3, "should have deploy function.");
  });

  it("should return the ganache accounts", async () => {
    assert.ok(accounts.length);
  });

  const config = createConfig(expected_code);
  // Compiling contract
  const json = JSON.parse(solc.compile(config));
  // Selecting contract to be deployed
  const { abi, evm } = json.contracts.jsons["Controller"];
  let contract = null;

  describe("#deploy()", () => {
    it("should deploy successfully", async () => {
      // Setting up the inputs
      const inputs = {
        abi: abi,
        bytecode: evm.bytecode.object,
        args: [],
        from: accounts[0],
        gas: 4000000,
      };

      // Deploying
      contract = await deployer.deploy(inputs);

      // Asserting if the object isn't empty
      assert.ok(
        !helpers.isObjEmpty(contract),
        "should'nt return an empty object."
      );
    }).timeout(0);
  });

  describe("#retrieve()", () => {
    it("should retrieve the same object", async () => {
      // Deploying
      const samecontract = await deployer.retrieve(
        abi,
        contract.options.address
      );

      // Asserting if is the same contract
      assert.equal(
        JSON.stringify(samecontract.methods),
        JSON.stringify(contract.methods),
        "should return the same object."
      );
      assert.equal(
        samecontract.options.address,
        contract.options.address,
        "should return the same address."
      );
    }).timeout(0);
  });
});
