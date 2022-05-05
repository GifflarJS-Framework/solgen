import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import { IDeployer } from "../types/IDeployer";
import { IDeployerInputs } from "../types/IDeployerInputs";

interface ICreateDeployerDTO {
  web3: Web3 | undefined | null;
}

class Deployer implements IDeployer {
  private web3: Web3 | undefined | null;

  constructor({ web3 }: ICreateDeployerDTO) {
    this.web3 = web3;
  }

  setWeb3(newWeb3: Web3): Web3 {
    this.web3 = newWeb3;
    return this.web3;
  }

  getWeb3(): Web3 | undefined | null {
    return this.web3;
  }

  async deploy(inputs: IDeployerInputs): Promise<Contract> {
    if (!this.web3) {
      throw new Error("No web3 object configured.");
    }
    try {
      const { abi, bytecode, args, from, gas } = inputs;
      // Create a new contract and define ABI access
      const contract = await new this.web3.eth.Contract(abi)
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
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async retrieve(abi: AbiItem, address: string): Promise<Contract> {
    if (!this.web3) {
      throw new Error("No web3 object configured.");
    }
    try {
      const contract = await new this.web3.eth.Contract(abi, address);
      return contract;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
export default Deployer;
