import createCompiler from "@compiler";
import createDeployer from "@deployer";
import createContractModel from "@models/contract";
import createContractWriter from "@writers/contractWriter";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "../types/IContractDeployDTO";
import { IGifflarContract } from "../types/IGifflarContract";

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
 * @category Management
 * @requires createContractModel
 * @requires createContractWriter
 * @requires createCompiler
 * @requires createDeployer
 */
function createContract(name = ""): IGifflarContract {
  const contractWriter = createContractWriter();
  const compiler = createCompiler();
  const deployer = createDeployer({ web3: null });
  const contract = createContractModel({ contractName: name });

  const gifflarContract: IGifflarContract = {
    ...contract,

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
    write(): string {
      const contracts = [contract];
      contract.code = contractWriter.write(contracts, () => {
        return "";
      });
      return contract.code;
    },

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
    compile(callback: (errors: any) => void): any {
      let errors;
      if (contract.code) {
        contract.json = compiler.compile(contract.code);
      }
      if (callback) {
        if (contract.json.errors) {
          errors = contract.json.errors;
        }

        callback(errors);
      }
      return contract.json;
    },

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
    async deploy(inputs: IContractDeployDTO, web3: Web3): Promise<Contract> {
      deployer.setWeb3(web3);
      const json = contract.json.contracts.jsons[contract.name];
      if (!json) {
        throw new Error("Failed to find compiled contract.");
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
    },

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
    written(): string | undefined {
      return contract.code;
    },

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
    compiled(): any | undefined {
      return contract.json;
    },

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
    deployed(): Contract | undefined {
      return contract.instance;
    },
  };

  return gifflarContract;
}

export default createContract;
