import { IAbiItem } from "@deployer/types/IAbiItem";
import { INetworkConfig } from "@deployer/types/INetworkConfig";
import { IWeb3 } from "@deployer/types/IWeb3";
import { Account } from "web3-core";
import { Contract } from "web3-eth-contract";
import { IDeployer } from "../types/IDeployer";
import { IDeployerInputs } from "../types/IDeployerInputs";
import Web3 from "web3";

class Deployer implements IDeployer {
  private web3: IWeb3 | undefined | null;
  private networkConfig: INetworkConfig | undefined;

  setWeb3(newWeb3: IWeb3): IWeb3 {
    this.web3 = newWeb3;
    return this.web3;
  }

  getWeb3(): IWeb3 | undefined | null {
    return this.web3;
  }

  setNetworkConfig(networkConfig: INetworkConfig): void {
    this.networkConfig = networkConfig;
    if (this.web3) {
      this.web3.setProvider(networkConfig.nodeLink);
    }
  }

  getNetworkConfig(): INetworkConfig | undefined {
    return this.networkConfig;
  }

  createWeb3(): IWeb3 {
    const web3 = new Web3();
    this.web3 = web3;
    if (this.networkConfig) {
      this.web3.setProvider(this.networkConfig.nodeLink);
    }
    return web3;
  }

  addSigner(accountPrivateKey: string): Account {
    if (!this.web3) {
      throw new Error("No web3 object configured.");
    }

    // Creating account from private key
    const account =
      this.web3.eth.accounts.privateKeyToAccount(accountPrivateKey);

    // Adding account to memory wallet
    this.web3.eth.accounts.wallet.add(account);

    return account;
  }

  async deploy(
    inputs: IDeployerInputs,
    accountPrivateKey?: string
  ): Promise<Contract> {
    if (!this.web3) {
      throw new Error("No web3 object configured.");
    }
    try {
      // Used if there is no account in memory
      if (accountPrivateKey) {
        // Creating account from private key
        const account =
          this.web3.eth.accounts.privateKeyToAccount(accountPrivateKey);

        // Adding account to memory wallet
        this.web3.eth.accounts.wallet.add(account);
      }

      const { abi, bytecode, args, from, gas, gasPrice, nonce } = inputs;
      // Create a new contract and define ABI access
      const contract = await new this.web3.eth.Contract(abi)
        // Deploy configuration
        .deploy({
          data: bytecode,
          arguments: args,
        })
        .send({
          gas: gas || this.networkConfig?.gas,
          gasPrice: gasPrice || this.networkConfig?.gasPrice,
          from: from || this.web3.eth.accounts.wallet[0].address,
          nonce,
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
