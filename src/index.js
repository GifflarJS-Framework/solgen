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

  function write() {
    data.code = contractWriter.write(data.models);
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
