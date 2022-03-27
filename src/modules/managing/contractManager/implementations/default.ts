import createCompiler from "@compiler";
import createDeployer from "@deployer";
import createContract from "@managing/contract";
import { IGifflarContract } from "@managing/contract/types/IGifflarContract";
import createContractWriter from "@writers/contractWriter";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { IContractManager } from "../types/IContractManager";
import { IManagerDeployDTO } from "../types/IManagerDeployDTO";

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
function createContractManager(web3: Web3 | null): IContractManager {
  const contractWriter = createContractWriter();
  const compiler = createCompiler();
  const deployer = createDeployer({ web3 });

  /**
   * @property {string} code The contracts code after writing.
   * @property {Object} json The json interface after compiling.
   * @property {string} address The blockchain address of the contract in the network.
   */
  // const data = {
  //   contracts: [],
  //   code: "",
  //   json: {},
  // };

  function _writeContracts(contracts: Array<IGifflarContract>): string {
    let _contracts: Array<IGifflarContract> = contracts;

    // If contract object should be updated
    let callback = null;

    // Saving the individual code inside contract
    callback = (individualCode: string, index: number) => {
      // Updating individual contracts
      _contracts[index].code = individualCode;
    };

    // Call the contract writer to write the contracts code
    const code = contractWriter.write(_contracts, callback);

    return code;
  }

  const contractManager: IContractManager = {
    contracts: [],
    code: "",
    json: {},

    setWeb3: deployer.setWeb3,
    getWeb3: deployer.getWeb3,

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
    newContract(name: string): IGifflarContract {
      const newcontract = createContract(name);
      this.contracts.push(newcontract);

      return newcontract;
    },

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
    getContract(name: string): IGifflarContract {
      return this.contracts.filter((contract) => {
        return contract.name === name;
      })[0];
    },

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
    writeAll(): string {
      const _code = _writeContracts(this.contracts);
      this.code = _code;
      return this.code;
    },

    write(contracts: Array<IGifflarContract>): string {
      const _code = _writeContracts(contracts);
      this.code = _code;
      return this.code;
    },

    written(): string | undefined {
      return this.code;
    },

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
    compileAll(callback: (errors: Array<any>) => void): any {
      // Compiling all
      this.json = compiler.compile(this.code);

      // Allowing error handling
      if (this.json.errors && callback) {
        callback(this.json.errors);
      }

      // Updating the contract object
      this.contracts.map((contract: IGifflarContract) => {
        const json = this.json.contracts.jsons[contract.name];
        if (json) {
          // eslint-disable-next-line no-param-reassign
          contract.json = json;
        }
        return json;
      });

      return this.json;
    },
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
    compile(
      contractName: string,
      callback: (errors: Array<any>) => void
    ): void {
      // Filtering the contract by contract name
      const contract = this.contracts.filter((contractItem) => {
        return contractItem.name === contractName;
      })[0];

      // If contract object is valid
      if (
        contract &&
        contract.compile &&
        typeof contract.compile === "function"
      ) {
        // Compiling contract
        const json = contract.compile((errors) => {
          callback(errors);
        });
        if (json.errors && callback) {
          callback(json.errors);
        }
        return json;
      }

      callback([]);
      throw new Error("Unable to compile contract");
    },
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
    async deploy(
      contractName: string,
      inputs: IManagerDeployDTO
    ): Promise<Contract> {
      // Obtaining the contract JSON
      const json = this.json.contracts.jsons[contractName];
      if (!json) {
        throw new Error("Contract wasn't compiled yet.");
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
    },
  };

  return contractManager;
}

export default createContractManager;
