import { IWeb3 } from "@deployer/types/IWeb3";
import { IGifflarContract } from "@managing/gifflarContract/types/IGifflarContract";
import { IGifflarContractModel } from "@managing/gifflarContract/types/IGifflarContractModel";
import { IGifflarInterface } from "@managing/GifflarInterface/types/IGifflarInterface";
import { IGifflarInterfaceModel } from "@managing/GifflarInterface/types/IGifflarInterfaceModel";
import { IGifflarLibrary } from "@managing/gifflarLibrary/types/IGifflarLibrary";
import { IGifflarLibraryModel } from "@managing/gifflarLibrary/types/IGifflarLibraryModel";
import { IImport } from "@models/toplevels/import/types/IImport";
import { IImportModel } from "@models/toplevels/import/types/IImportModel";
import { IImportWriter } from "@writers/toplevels/importWriter/types/IImportWriter";
import { ICompiler } from "modules/compiler/types/ICompiler";
import { IDeployer } from "modules/deployer/types/IDeployer";
import { inject, injectable } from "tsyringe";
import { Contract } from "web3-eth-contract";
import { ITopLevel } from "../types/ITopLevel";
import { IGifflarManager } from "../types/IGifflarManager";
import { IManagerDeployDTO } from "../types/IManagerDeployDTO";

@injectable()
class GifflarManager implements IGifflarManager {
  private imports: Array<IImport> = [];
  private topLevelModels: Array<ITopLevel> = [];
  private code: string = "";
  private json: any = {};

  constructor(
    @inject("ImportModel")
    private importModel: IImportModel,
    @inject("ImportWriter")
    private importWriter: IImportWriter,
    @inject("GifflarContractModel")
    private contractModel: IGifflarContractModel,
    @inject("GifflarLibraryModel")
    private libraryModel: IGifflarLibraryModel,
    @inject("GifflarInterfaceModel")
    private interfaceModel: IGifflarInterfaceModel,
    @inject("Deployer")
    private deployer: IDeployer,
    @inject("Compiler")
    private compiler: ICompiler
  ) {}

  private _writeTopLevelModels(topLevelModels: Array<ITopLevel>): string {
    // Writing imports first
    let completeCode = this.importWriter.write(this.imports);

    topLevelModels.map((topLevelModel) => {
      // Call the contract writer to write the top level models code
      const code = topLevelModel.write();
      completeCode += code;
    });

    return completeCode;
  }

  newImport(identifierPath: string, alias?: string): IImport {
    const newImport: IImport = this.importModel.execute({
      identifierPath,
      alias,
    });
    this.imports.push(newImport);

    return newImport;
  }

  newContract(name: string): IGifflarContract {
    const newcontract: IGifflarContract = this.contractModel.execute(name);
    newcontract.setName(name);
    this.topLevelModels.push(newcontract);

    return newcontract;
  }

  newLibrary(name: string): IGifflarLibrary {
    const newLibrary: IGifflarLibrary = this.libraryModel.execute(name);
    newLibrary.setName(name);
    this.topLevelModels.push(newLibrary);

    return newLibrary;
  }

  newInterface(name: string): IGifflarInterface {
    const newInterface: IGifflarInterface = this.interfaceModel.execute(name);
    newInterface.setName(name);
    this.topLevelModels.push(newInterface);

    return newInterface;
  }

  getImports(): Array<IImport> {
    return this.imports;
  }

  getCode(): string {
    return this.code;
  }

  getCompiledJson(): any {
    return this.json;
  }

  getAllModels(): Array<ITopLevel> {
    return this.topLevelModels;
  }

  getContract(name: string): IGifflarContract {
    const filteredContract: any = this.topLevelModels.filter((gTopLevel) => {
      return gTopLevel.contract?.name === name;
    })[0];

    return filteredContract as IGifflarContract;
  }

  getLibrary(name: string): IGifflarLibrary {
    const filteredLibrary = this.topLevelModels.filter((gTopLevel) => {
      return gTopLevel.library?.name === name;
    })[0];

    return filteredLibrary as IGifflarLibrary;
  }

  getInterface(name: string): IGifflarInterface {
    const filteredInterface = this.topLevelModels.filter((gTopLevel) => {
      return gTopLevel.interface?.name === name;
    })[0];

    return filteredInterface as IGifflarInterface;
  }

  writeAll(): string {
    const _code = this._writeTopLevelModels(this.topLevelModels);
    this.code = _code;
    return this.code;
  }

  write(topLevelModels: Array<ITopLevel>): string {
    const _code = this._writeTopLevelModels(topLevelModels);
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
    this.topLevelModels.map((gContract: ITopLevel) => {
      const json = this.json.contracts.jsons[gContract.getName()];
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
    const contract = this.topLevelModels.filter((gTopLevel) => {
      return gTopLevel.getName() === contractName;
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

export default GifflarManager;
