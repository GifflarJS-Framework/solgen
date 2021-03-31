const createContract = require("./contract");
const createContractWriter = require("../writers/old/contractWriter");
const createCompiler = require("../compiler/compiler");
const createDeployer = require("../deployer/deployer");

/**
 * @author Levy Santiago
 * @module
 * @name createContractManager
 * @description A <b>Factory</b> to create a new Contract Manager object.
 * @param {Object} [web3] The web3 object already with the provider.
 * @returns {Object} The Contract Manager object.
 * @example
 * Usage
 * const provider = getProvider(); //your provider of choose
 * const web3 = Web3(provider)
 * const manager = createContractManager(web3);
 *
 * @category Management
 * @requires createContract
 * @requires createContractWriter
 * @requires createCompiler
 * @requires createDeployer
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
  function write(contracts) {
    let _contracts = [];

    // If a list of contracts was passed
    if (contracts && Array.isArray(contracts) && contracts[0]) {
      _contracts = contracts;
    } else {
      // Copying data contracts
      _contracts = [...data.contracts];
    }

    // If contract object should be updated
    let callback = null;

    // Saving the individual code inside contract
    callback = (individualCode, index) => {
      // Updating individual contracts
      _contracts[index].code = individualCode;
    };

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
   * @returns {Object} The json of all contracts compiled.
   * @example
   * Usage
   * manager.compileAll((errors)=>{
   *    console.log(errors)
   * });
   */
  function compileAll(cb) {
    // Compiling all
    data.json = compiler.compile(data.code);

    // Allowing error handling
    if (data.json.errors && cb) {
      cb(data.json.errors);
    }

    // Updating the contract object
    data.contracts.map((contract) => {
      const json = data.json.contracts.jsons[contract.name];
      if (json) {
        contract.json = json;
      }
    });

    return data.json;
  }

  /**
   * @author Levy Santiago
   * @name compile
   * @method
   * @description Compiles a given contract created inside the manager object and saves the json generated.
   * @param {Object} contractName The name of the contract to be compiled.
   * @param {Function} [cb] The callback function to get possible errors while compiling.
   * @returns {Object} The json of the contract compiled.
   * @example
   * Usage
   * manager.compile("MyContract", (errors)=>{
   *    console.log(errors)
   * });
   */
  function compile(contractName, cb) {
    // Filtering the contract by contract name
    const contract = data.contracts.filter((contract) => {
      return contract.name === contractName;
    })[0];

    // If contract object is valid
    if (
      contract &&
      contract.compile &&
      typeof contract.compile === "function"
    ) {
      // Compiling contract
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
   * @param {string} contractName The name of the contract to be deployed.
   * @param {Object} inputs The inputs for contract deploying.
   * @property {string} from The address who will deploy the contract.
   * @property {Array} args The arguments needed to deploy the contract.
   * @property {Number} gas The amount of fee you are willing to pay when deploying the contract.
   * @returns {Object} The contract instance on the blockchain.
   * @example
   * Usage
   * manager.deploy("MyContract", {
   *   from: "0xsd3...",
   *   args: ["message"],
   *   gas: 300000
   * });
   */
  async function deploy(contractName, inputs) {
    // Obtaining the contract JSON
    const json = data.json.contracts.jsons[contractName];
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
    const contract = await deployer.deploy(_inputs);
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
