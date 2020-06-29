const createContractModel = require("../models/contract");
const createContractWriter = require("../writers/contractWriter");
const createCompiler = require("../compiler/compiler");
const createDeployer = require("../deployer/deployer");

function createContract(name = "") {
  const contractWriter = createContractWriter();
  const compiler = createCompiler();
  const deployer = createDeployer();
  const contract = createContractModel(name);

  function write() {
    const contracts = [contract];
    contract.code = contractWriter.write(contracts);
    return contract.code;
  }

  function compile(cb) {
    contract.json = compiler.compile(contract.code);
    if (contract.json.errors && cb) {
      cb(contract.json.errors);
    }
    return contract.json;
  }

  async function deploy(from, args, gas, web3 = null) {
    deployer.setWeb3(web3);
    const json = contract.json.contracts[":" + contract.name];
    if (!json) {
      return {};
    }
    const inputs = {
      abi: JSON.parse(json.interface),
      bytecode: json.bytecode,
      args: args,
      from: from,
      gas: gas,
    };
    contract.instance = await deployer.deploy(inputs);
    return contract.instance;
  }

  function modeled() {
    return contract;
  }
  function compiled() {
    if (contract.json) {
      return contract.json;
    }

    return false;
  }
  function deployed() {
    if (contract.instance) {
      return contractl.instance;
    }
    return false;
  }

  contract.write = write;
  contract.compile = compile;
  contract.deploy = deploy;
  contract.setWeb3 = deployer.setWeb3;

  return contract;
}

module.exports = createContract;
