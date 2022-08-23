import { IWeb3 } from "@deployer/types/IWeb3";
import { IGifflarContract } from "@managing/contract/types/IGifflarContract";
import { IGifflarContractModel } from "@managing/contract/types/IGifflarContractModel";
import { IContractJson } from "@models/contract/types/IContractJson";
import { IContractWriter } from "@writers/contractWriter/types/IContractWriter";
import { ICompiler } from "modules/compiler/types/ICompiler";
import { IDeployer } from "modules/deployer/types/IDeployer";
import { inject, injectable } from "tsyringe";
import { Contract } from "web3-eth-contract";
import { IGifflarContractManager } from "../types/IGifflarContractManager";
import { IManagerDeployDTO } from "../types/IManagerDeployDTO";

@injectable()
class GifflarContractManager implements IGifflarContractManager {
  contracts: Array<IGifflarContract> = [];
  code: string = "";
  json: any = {};

  constructor(
    @inject("GifflarContractModel")
    private contractModel: IGifflarContractModel,
    @inject("ContractWriter")
    private contractWriter: IContractWriter,
    @inject("Deployer")
    private deployer: IDeployer,
    @inject("Compiler")
    private compiler: ICompiler
  ) {}

  private _writeContracts(contracts: Array<IContractJson>): string {
    let _contracts: Array<IContractJson> = contracts;

    // If contract object should be updated
    let callback = null;

    // Saving the individual code inside contract
    callback = (individualCode: string, index: number) => {
      // Updating individual contracts
      _contracts[index].code = individualCode;
    };

    // Call the contract writer to write the contracts code
    const code = this.contractWriter.write(_contracts, callback);

    return code;
  }

  newContract(name: string): IGifflarContract {
    const newcontract: IGifflarContract = this.contractModel.execute(name);
    newcontract.setName(name);
    this.contracts.push(newcontract);

    return newcontract;
  }

  getContract(name: string): IGifflarContract {
    return this.contracts.filter((gContract) => {
      return gContract.contract.name === name;
    })[0];
  }

  writeAll(): string {
    const _code = this._writeContracts(this.contracts);
    this.code = _code;
    return this.code;
  }

  write(contracts: Array<IGifflarContract>): string {
    const _code = this._writeContracts(contracts);
    this.code = _code;
    return this.code;
  }

  written(): string | undefined {
    return this.code;
  }

  compileAll(callback: (errors: Array<any>) => void): any {
    // Compiling all
    this.json = this.compiler.compile(this.code);

    // Allowing error handling
    if (this.json.errors && callback) {
      callback(this.json.errors);
    }

    // Updating the contract object
    this.contracts.map((gContract: IGifflarContract) => {
      const json = this.json.contracts.jsons[gContract.contract.name];
      if (json) {
        // eslint-disable-next-line no-param-reassign
        gContract.json = json;
      }
      return json;
    });

    return this.json;
  }

  compile(contractName: string, callback: (errors: Array<any>) => void): void {
    // Filtering the contract by contract name
    const contract = this.contracts.filter((gContract) => {
      return gContract.contract.name === contractName;
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
  }

  async deploy(
    contractName: string,
    inputs: IManagerDeployDTO,
    accountPrivateKey?: string
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
    const contract = await this.deployer.deploy(_inputs, accountPrivateKey);
    return contract;
  }

  setWeb3(newWeb3: IWeb3): IWeb3 {
    this.deployer.setWeb3(newWeb3);
    return newWeb3;
  }

  getWeb3(): IWeb3 | null | undefined {
    return this.deployer.getWeb3();
  }
}

export default GifflarContractManager;
