import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";
import { IDeployerInputs } from "../types/IDeployerInputs";
import { IDeployer } from "../types/IDeployer";

interface ICreateDeployerDTO {
  web3: Web3 | undefined | null;
}

function createDeployer({ web3 }: ICreateDeployerDTO): IDeployer {
  let _web3 = web3;

  const deployer: IDeployer = {
    setWeb3(newWeb3: Web3): Web3 {
      _web3 = newWeb3;
      return _web3;
    },

    getWeb3(): Web3 | undefined | null {
      return _web3;
    },

    /**
     * Deploys a smart contract
     * @param {JSON} inputs
     * @property {JSON} abi
     * @property {string} bytecode
     * @property {Array} args
     * @property {string} from
     */
    async deploy(inputs: IDeployerInputs): Promise<Contract> {
      if (!_web3) {
        throw new Error("No web3 object configured.");
      }
      try {
        const { abi, bytecode, args, from, gas } = inputs;
        // Create a new contract and define ABI access
        const contract = await new _web3.eth.Contract(abi)
          // Deploy configuration
          .deploy({
            data: bytecode,
            arguments: args,
          })
          .send({
            gas,
            from,
          });

        return contract;
      } catch (e) {
        throw new Error("Error when obtaining SmC instance");
      }
    },

    /**
     * Gets a contract instance by the blockchain address and ABI
     * @param {string} address
     * @param {Object} abi
     */
    async retrieve(abi: AbiItem, address: string): Promise<Contract> {
      if (!_web3) {
        throw new Error("No web3 object configured.");
      }
      try {
        const contract = await new _web3.eth.Contract(abi, address);
        return contract;
      } catch (e) {
        throw new Error("Error when obtaining SmC instance");
      }
    },
  };

  return deployer;
}

export default createDeployer;
