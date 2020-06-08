const createContractModel = require("./modules/models/contract");
const createContractWriter = require("./modules/writers/contractWriter");
const createCompiler = require("./modules/compiler");

function createContractManager(_name) {
  const contractWriter = createContractWriter();
  const compiler = createCompiler();

  /**
   * @property {string} code The contracts code after writing.
   * @property {Object} json The json interface after compiling.
   * @property {string} address The blockchain address of the contract in the network.
   */
  const data = {
    models: [],
    code: "",
    json: {},
    address: "",
  };

  function createContract(name) {
    const newcontract = createContractModel(name);
    data.models.push(newcontract);

    return newcontract;
  }

  function getContract(name) {
    return data.models.filter((contract) => {
      return contract.name == name;
    })[0];
  }

  /**
   *
   * @param {Object[]} [contracts]
   */
  function write(contracts) {
    // Copying data models
    let _contracts = [...data.models];

    // If a list of contracts was passed
    if (contracts && Array.isArray(contracts) && contracts[0]) {
      _contracts = contracts;
    }

    // Call the contract writer to write the code
    data.code = contractWriter.write(_contracts);

    return data.code;
  }

  function compile() {
    data.json = compiler.compile(data.code);
    return data.json;
  }

  function deploy() {
    return "";
  }

  data.createContract = createContract;
  data.write = write;
  data.compile = compile;
  data.deploy = deploy;
  data.getContract = getContract;

  return data;
}

module.exports = createContractManager;
