const createContract = require("./contract");
const createContractWriter = require("../writers/contractWriter");
const createCompiler = require("../compiler/compiler");
const createDeployer = require("../deployer/deployer");

/**
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createContractManager
 * @description A <b>Factory</b> to create a new Contract Manager object.
 * @param {Object} [web3] The web3 object already with the provider.
 * @returns {Object} The Contract Manager object.
 * @example
 * Usage
 * const provider = getProvider(); //your provider of choose
 * const web3 = Web3(provider)
 * const manager = createContractManager();
 */
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

  /**
   * @author Levy Santiago
   * @name newContract
   * @method
   * @description Creates a new contract object inside the manager object.
   * @param {string} name The contract name.
   * @returns {Object} The new contract object created.
   * @example
   * Usage
   * manager.newContract("MyContract");
   *
   * Return
   * {
   *   name: "MyContract"
   *   contract:{
   *     variables: []
   *     functions:[]
   *   }
   * }
   */
  function newContract(name) {
    const newcontract = createContract(name);
    data.contracts.push(newcontract);

    return newcontract;
  }

  /**
   * @author Levy Santiago
   * @name getContract
   * @method
   * @description Get a contract created inside the manager object by name.
   * @param {string} name The contract name.
   * @returns {Object} The contract object selected.
   * @example
   * Usage
   * manager.getContract("MyContract");
   *
   * Return
   * {
   *   name: "MyContract"
   *   contract:{
   *     variables: []
   *     functions:[]
   *   }
   * }
   */
  function getContract(name) {
    return data.contracts.filter((contract) => {
      return contract.name == name;
    })[0];
  }

  /**
   * @author Levy Santiago
   * @name write
   * @method
   * @description Writes the code of a list of contracts. The code
   * of each contract will be together in a unique string, and this
   * string will be saved inside the manager object.
   * @param {Object[]} [contracts] The list of contracts objects to be wrote.
   * @returns {Object} The Solidity code wrote.
   * @example
   * Usage
   * manager.write();
   * manager.write([contract, second_contract]);
   */
  function write(options = { contracts: [], updateContract: false }) {
    let _contracts = [];

    // If a list of contracts was passed
    if (
      options.contracts &&
      Array.isArray(options.contracts) &&
      options.contracts[0]
    ) {
      _contracts = options.contracts;
    } else {
      // Copying data contracts
      _contracts = [...data.contracts];
    }

    // If contract object should be updated
    let callback = null;
    if (options.updateContract) {
      callback = (individualCode, index) => {
        // Updating individual contracts
        _contracts[index].code = individualCode;
      };
    }
    // Call the contract writer to write the contracts code
    data.code = contractWriter.write(_contracts, callback);

    return data.code;
  }

  /**
   * @author Levy Santiago
   * @name compileAll
   * @method
   * @description Compiles all contracts created inside the manager object and saves the json generated.
   * @param {Function} [cb] The callback function to get possible errors while compiling.
   * @param {Object} [options={ updateContract: false }] The options to customize the function.
   * @property {boolean} [updateContract = false] The option to update or not the contract object inside the manager.
   * @returns {Object} The json of all contracts compiled.
   * @example
   * Usage
   * manager.compileAll((errors)=>{
   *    console.log(errors)
   * });
   *
   * manager.compileAll((errors)=>{
   *    console.log(errors)
   * }, {updateContract: true});
   */
  function compileAll(cb, options = { updateContract: false }) {
    data.json = compiler.compile(data.code);

    // If contract object should be updated
    if (options.updateContract) {
      data.contracts.map((contract) => {
        const json = data.json.contracts.jsons[contract.name];
        if (json) {
          contract.json = json;
        }
      });
    }

    // Allowing error handling
    if (data.json.errors && cb) {
      cb(data.json.errors);
    }
    return data.json;
  }

  /**
   * @author Levy Santiago
   * @name compile
   * @method
   * @description Compiles a given contract created inside the manager object and saves the json generated.
   * @param {Object} contract The contract object to be compiled.
   * @param {Function} [cb] The callback function to get possible errors while compiling.
   * @returns {Object} The json of the contract compiled.
   * @example
   * Usage
   * manager.compile(contract, (errors)=>{
   *    console.log(errors)
   * });
   */
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
   * @author Levy Santiago
   * @name deploy
   * @method
   * @description Deploys a given contract created inside the manager object and saves the json generated.
   * @param {Object} contract The contract object to be compiled.
   * @param {Function} [cb] The callback function to get possible errors while compiling.
   * @returns {Object} The json of the contract compiled.
   * @example
   * Usage
   * manager.compile(contract, (errors)=>{
   *    console.log(errors)
   * });
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
