const createContractModel = require("./modules/models/contract");
const createContractWriter = require("./modules/writers/contractWriter");
const createCompiler = require("./modules/compiler");

function createContract(_name) {
  const contractModel = createContractModel(_name);
  const contractWriter = createContractWriter();
  const compiler = createCompiler();

  const contract = {
    ...contractModel,
    code: "",
    json: {},
    address: "",
  };

  function json() {
    return contract.toString();
  }

  function write() {
    contract.code = contractWriter.write(contract);
    return contract.code;
  }

  function compile() {
    contract.json = compiler.compile(contract.code);
    return contract.json;
  }

  contract.json = json;
  contract.write = write;
  contract.compile = compile;

  return contract;
}

module.exports = createContract;
