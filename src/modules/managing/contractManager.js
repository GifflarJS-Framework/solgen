const createContract = require("./contract");
const createContractWriter = require("../writers/contractWriter");
const createCompiler = require("../compiler/compiler");
const createDeployer = require("../deployer/deployer");

function createContractManager(web3 = null) {
  const contractWriter = createContractWriter();
  const compiler = createCompiler();
  const deployer = createDeployer(web3);

  /**
   * @property {string} code The contracts code after writing.
   * @property {Object} json The json interface after compiling.
   * @property {string} address The blockchain address of the contract in the network.
   */
  const data = {
    contracts: [],
    code: "",
    json: {},
  };

  function newContract(name) {
    const newcontract = createContract(name);
    data.contracts.push(newcontract);

    return newcontract;
  }

  function getContract(name) {
    return data.contracts.filter((contract) => {
      return contract.name == name;
    })[0];
  }

  /**
   *
   * @param {Object[]} [contracts]
   */
  function write(contracts) {
    // Copying data contracts
    let _contracts = [...data.contracts];

    // If a list of contracts was passed
    if (contracts && Array.isArray(contracts) && contracts[0]) {
      _contracts = contracts;
    }

    // Call the contract writer to write the code
    data.code = contractWriter.write(_contracts);

    return data.code;
  }

  function compileAll(cb) {
    data.json = compiler.compile(data.code);
    if (data.json.errors && cb) {
      cb(data.json.errors);
    }
    return data.json;
  }

  function compile(contract, cb) {
    if (
      contract &&
      contract.compile &&
      typeof contract.compile === "function"
    ) {
      const json = contract.compile();
      if (json.errors && cb) {
        cb(json.errors);
      }
      return json;
    }

    cb({});
    return {};
  }

  /**
   * Deploys a smart contract
   * @param {string} contractName
   */
  async function deploy(contractName, from, args, gas) {
    const json = data.json.contracts.jsons[contractName];
    if (!json) {
      return {};
    }
    const inputs = {
      abi: json.abi,
      bytecode: json.evm.bytecode.object,
      args: args,
      from: from,
      gas: gas,
    };
    const contract = await deployer.deploy(inputs);
    return contract;
  }

  data.newContract = newContract;
  data.createContract = createContract;
  data.write = write;
  data.compile = compile;
  data.compileAll = compileAll;
  data.getContract = getContract;
  data.deploy = deploy;
  data.setWeb3 = deployer.setWeb3;
  data.getWeb3 = deployer.getWeb3;

  return data;
}

module.exports = createContractManager;
