import ContractModel from "@models/contract/implementations/ContractModel";
import { IContractWriter } from "@writers/contractWriter/types/IContractWriter";
import { ICompiler } from "modules/compiler/types/ICompiler";
import { IDeployer } from "modules/deployer/types/IDeployer";
import { inject, injectable } from "tsyringe";
import { IGifflarContract } from "../types/IGifflarContract";
import { IGlobalVariableModel } from "@models/globalVariable/types/IGlobalVariableModel";
import { IFunctionModel } from "@models/function/types/IFunctionModel";
import { IEventCallModel } from "@models/eventCall/types/IEventCallModel";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "../types/IContractDeployDTO";
import Web3 from "web3";
import IEventModel from "@models/event/types/IEventModel";

@injectable()
class GifflarContract extends ContractModel implements IGifflarContract {
  code: string;
  json: any;
  instance: Contract;

  constructor(
    public name: string = "",
    @inject("Compiler")
    private compiler: ICompiler,
    @inject("Deployer")
    private deployer: IDeployer,
    @inject("ContractWriter")
    private contractWriter: IContractWriter,
    @inject("GlobalVariableModel")
    globalVariableModel: IGlobalVariableModel,
    @inject("FunctionModel")
    functionModel: IFunctionModel,
    @inject("EventModel")
    eventCallModel: IEventCallModel,
    @inject("EventModel")
    eventModel: IEventModel
  ) {
    super(name, globalVariableModel, functionModel, eventCallModel, eventModel);
  }

  setName(newName: string): void {
    this.name = newName;
  }

  write(): string {
    const contracts = [this];
    this.code = this.contractWriter.write(contracts, () => {
      return "";
    });
    return this.code;
  }

  compile(callback: (errors: any) => void): any {
    let errors;
    if (this.code) {
      this.json = this.compiler.compile(this.code);
    }
    if (callback) {
      if (this.json.errors) {
        errors = this.json.errors;
      }

      callback(errors);
    }
    return this.json;
  }

  async deploy(inputs: IContractDeployDTO, web3: Web3): Promise<Contract> {
    this.deployer.setWeb3(web3);
    const json = this.json.contracts.jsons[this.name];
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
    this.instance = await this.deployer.deploy(_inputs);
    return this.instance;
  }

  written(): string | undefined {
    return this.code;
  }

  compiled(): any | undefined {
    return this.json;
  }

  deployed(): Contract | undefined {
    return this.instance;
  }
}

export default GifflarContract;
