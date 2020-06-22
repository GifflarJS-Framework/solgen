const assert = require("assert");
const createDeployer = require("@deployer/deployer");
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

  it("should return empty object", () => {
    deployer = createDeployer();
    assert.ok(helpers.isObjEmpty(deployer), "should return an empty object.");
  });

  it("should return valid object with deploy function", () => {
    deployer = createDeployer(web3);
    assert.ok(helpers.isObject(deployer), "should return valid object.");
    assert.ok(deployer.deploy, "should return an object with deploy function.");
  });

  it("should return the ganache accounts", async () => {
    assert.ok(accounts.length);
  });

  it("should deploy successfully", async () => {
    const json = solc.compile(expected_code);
    let contract = json.contracts[":Controller"];
    contract = await deployer.deploy(
      JSON.parse(contract.interface),
      contract.bytecode,
      [],
      accounts[0],
      4000000
    );

    assert.ok(
      !helpers.isObjEmpty(contract),
      "should'nt return an empty object."
    );
  }).timeout(0);
});
