import { IContractWriter } from "@writers/toplevels/contractWriter/types/IContractWriter";
import { ICompiler } from "@modules/compiler/types/ICompiler";
import { IDeployer } from "@modules/deployer/types/IDeployer";
import { inject, injectable } from "tsyringe";
import { IGifflarContract } from "../types/IGifflarContract";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "../types/IContractDeployDTO";
import { IContractModel } from "@models/toplevels/contract/types/IContractModel";
import { IGifflarContractModel } from "../types/IGifflarContractModel";
import { IWeb3 } from "@deployer/types/IWeb3";
import { IContractJson } from "@models/toplevels/contract/types/IContractJson";
import { IImportModel } from "@models/toplevels/import/types/IImportModel";
import { IImportWriter } from "@writers/toplevels/importWriter/types/IImportWriter";
import { IImport } from "@models/toplevels/import/types/IImport";
import Web3 from "web3";
import { INetworkConfig } from "@deployer/types/INetworkConfig";
import { Account } from "web3-core";

@injectable()
class GifflarContractModel implements IGifflarContractModel {
  private imports: Array<IImport> = [];

  constructor(
    @inject("ImportModel")
    private importModel: IImportModel,
    @inject("ImportWriter")
    private importWriter: IImportWriter,
    @inject("Compiler")
    private compiler: ICompiler,
    @inject("ContractWriter")
    private contractWriter: IContractWriter,
    @inject("ContractModel")
    private contractModel: IContractModel,
    @inject("Deployer")
    private deployer: IDeployer
  ) {}

  execute(contractName: string): IGifflarContract {
    const _contractModel = this.contractModel.execute(contractName);

    const gContract: IGifflarContract = {
      ..._contractModel,
      setName: (newName: string): void => {
        gContract.contract.name = newName;
      },

      getName: (): string => {
        return gContract.contract.name;
      },

      setImport: (identifierPath: string, alias?: string): IImport => {
        const newImport: IImport = this.importModel.execute({
          identifierPath,
          alias,
        });
        this.imports.push(newImport);

        return newImport;
      },

      write: (contracts?: Array<IContractJson>): string => {
        const _contracts = contracts || [gContract];
        // Writing imports
        gContract.code = this.importWriter.write(this.imports);
        // Writing contract
        gContract.code += this.contractWriter.write(_contracts, () => {
          return "";
        });
        return gContract.code;
      },

      compile: (callback: (errors: any) => void): any => {
        let errors;
        if (gContract.code) {
          gContract.json = this.compiler.compile(gContract.code);
        }
        if (callback) {
          if (gContract.json.errors) {
            errors = gContract.json.errors;
          }

          callback(errors);
        }

        // Inserting contract name in compiled json
        gContract.json.contracts.jsons[gContract.getName()].contractName =
          gContract.getName();

        // Inserting contract networks in compiled json
        gContract.json.contracts.jsons[gContract.getName()]["networks"] = {};

        return gContract.json;
      },

      setWeb3: (web3: IWeb3): void => {
        this.deployer.setWeb3(web3);
      },

      getWeb3: (): Web3 | null | undefined => {
        return this.deployer.getWeb3();
      },

      setDeployConfig: (networkConfig: INetworkConfig): Web3 | undefined => {
        this.deployer.setNetworkConfig(networkConfig);
        if (!this.deployer.getWeb3()) {
          return this.deployer.createWeb3();
        }
      },

      addSigner: (accountPrivateKey: string): Account => {
        return this.deployer.addSigner(accountPrivateKey);
      },

      recoverInstance: (): Contract | undefined => {
        const web3 = this.deployer.getWeb3();
        const networkConfig = this.deployer.getNetworkConfig();
        if (!web3 || !networkConfig) return undefined;
        if (!gContract.json.contracts) {
          throw new Error("Contract is not compiled");
        }
        const abi = gContract.json.contracts.jsons[gContract.getName()].abi;
        const address =
          gContract.json.contracts.jsons[gContract.getName()].networks[
            networkConfig.networkId
          ].address;
        if (!address) return undefined;

        // Recovering instance
        const instance = new web3.eth.Contract(abi);
        // Defining contract model instance
        gContract.instance = instance;

        return instance;
      },

      deploy: async (
        inputs: IContractDeployDTO,
        accountPrivateKey?: string
      ): Promise<Contract> => {
        const json = gContract.json.contracts.jsons[gContract.contract.name];
        if (!json) {
          throw new Error("Failed to find compiled contract.");
        }
        const _inputs = {
          abi: json.abi,
          bytecode: json.evm.bytecode.object,
          args: inputs.args,
          from: inputs.from,
          gas: inputs.gas,
          gasPrice: inputs.gasPrice,
          nonce: inputs.nonce,
        };
        gContract.instance = await this.deployer.deploy(
          _inputs,
          accountPrivateKey
        );
        // Inserting contract address to compilation json
        const networkConfig = this.deployer.getNetworkConfig();
        if (networkConfig) {
          if (!json["networks"][networkConfig.networkId])
            json["networks"][networkConfig.networkId] = {};
          json["networks"][networkConfig.networkId] = {
            address: gContract.instance.options.address,
          };
        }
        return gContract.instance;
      },
      written: (): string | undefined => {
        return gContract.code;
      },

      compiled: (): any | undefined => {
        return gContract.json;
      },

      deployed: (): Contract | undefined => {
        return gContract.instance;
      },
    };

    return gContract;
  }
}

export default GifflarContractModel;
