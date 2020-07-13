const createContractModel = require("../models/contract");
const createContractWriter = require("../writers/contractWriter");
const createCompiler = require("../compiler/compiler");
const createDeployer = require("../deployer/deployer");

/**
 * @author Levy Santiago
 * @module
 * @name createContract
 * @description A <b>Factory</b> to create a new Contract object.
 * @param {Object} [name=""] The contract name. This will be the name of
 * the contract inside the code too.
 * @returns {Object} The Contract object.
 * @example
 * Usage
 * const contract = createContract();
 * contract.setName("MyContract");
 * // or
 * const contract = createContract("MyContract");
 *
 * @category Model
 * @requires createContractModel
 * @requires createContractWriter
 * @requires createCompiler
 * @requires createDeployer
 */
function createContract(name = "") {
  const contractWriter = createContractWriter();
  const compiler = createCompiler();
  const deployer = createDeployer();
  const contract = createContractModel(name);

  /**
   * @author Levy Santiago
   * @name write
   * @method
   * @description Writes the code of a contract. The code
   * of each contract will be saved inside the contract object.
   * @returns {string} The Solidity code wrote.
   * @example
   * Usage
   * contract.write();
   */
  function write() {
    const contracts = [contract];
    contract.code = contractWriter.write(contracts);
    return contract.code;
  }

  /**
   * @author Levy Santiago
   * @name compile
   * @method
   * @description Compiles the code of a contract.
   * @param {Function} [cb] The callback function to handle errors.
   * @returns {Object} The JSON with the contract's abi and bytecode.
   * @example
   * Usage
   * contract.compile();
   *
   * // or
   * contract.compile((errors)=>{
   *    if(errors){
   *        errors.map((error)=>{
   *            console.log(error);
   *        });
   *    }
   * });
   */
  function compile(cb) {
    let errors = undefined;
    contract.json = compiler.compile(contract.code);
    if (contract.json.errors && cb) {
      errors = contract.json.errors;
    }
    cb(errors);
    cb({});
    return contract.json;
  }

  /**
   * @author Levy Santiago
   * @name deploy
   * @method
   * @description Deploys the contract.
   * @param {Function} inputs The inputs for contract deploying.
   * @param {Object} web3 The web3 instance with the provider configured.
   * @property {string} from The address who will deploy the contract.
   * @property {Array} args The arguments needed to deploy the contract.
   * @property {Number} gas The amount of fee you are willing to pay when deploying the contract.
   * @returns {Object} The JSON with the contract's abi and bytecode.
   * @example
   * Usage
   * const provider = getProvider(); //your provider of choose
   * const web3 = Web3(provider)
   * contract.deploy({
   *    from: "0xsd3...",
   *    args: ["message"],
   *    gas: 300000
   * }, web3);
   */
  async function deploy(inputs, web3 = null) {
    deployer.setWeb3(web3);
    const json = contract.json.contracts.jsons[contract.name];
    if (!json) {
      return {};
    }
    const _inputs = {
      abi: json.abi,
      bytecode: json.evm.bytecode.object,
      args: inputs.args,
      from: inputs.from,
      gas: inputs.gas,
    };
    contract.instance = await deployer.deploy(_inputs);
    return contract.instance;
  }

  /**
   * @author Levy Santiago
   * @name written
   * @method
   * @description Returns the contract code written.
   * If yes, the function returns it.
   * @returns {string} The Solidity code of the contract.
   * Can be a null sitring or the code as string.
   * @example
   * Usage
   * contract.written();
   */
  function written() {
    return contract.code;
  }

  /**
   * @author Levy Santiago
   * @name compiled
   * @method
   * @description Returns the contract JSON if was already compiled.
   * If yes, the function returns it, or else return undefined.
   * @returns {Object} The JSON of the contract containing the ABI and Bytecode.
   * Or undefined, if the contract wasn't compiled.
   * @example
   * Usage
   * contract.compiled();
   */
  function compiled() {
    return contract.json;
  }

  /**
   * @author Levy Santiago
   * @name deployed
   * @method
   * @description Returns the contract blockchain instance if was already deployed.
   * If yes, the function returns it, or else return undefined.
   * @returns {Object} The blockchain instance of the contract.
   * Or undefined, if the contract wasn't deployed yet.
   * @example
   * Usage
   * contract.deployed();
   */
  function deployed() {
    return contract.instance;
  }

  contract.write = write;
  contract.written = written;
  contract.compile = compile;
  contract.compiled = compiled;
  contract.deployed = deployed;
  contract.deploy = deploy;
  contract.setWeb3 = deployer.setWeb3;

  return contract;
}

module.exports = createContract;
