import { IAbiItem } from "@deployer/types/IAbiItem";
import { IWeb3 } from "@deployer/types/IWeb3";
import { Contract } from "web3-eth-contract";
import { IDeployer } from "../types/IDeployer";
import { IDeployerInputs } from "../types/IDeployerInputs";

class Deployer implements IDeployer {
  private web3: IWeb3 | undefined | null;

  setWeb3(newWeb3: IWeb3): IWeb3 {
    this.web3 = newWeb3;
    return this.web3;
  }

  getWeb3(): IWeb3 | undefined | null {
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

  async retrieve(abi: IAbiItem, address: string): Promise<Contract> {
    if (!this.web3) {
      throw new Error("No web3 object configured.");
    }
    try {
      const contract = new this.web3.eth.Contract(abi, address);
      return contract;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
export default Deployer;
