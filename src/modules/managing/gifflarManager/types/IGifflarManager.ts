import { IWeb3 } from "@deployer/types/IWeb3";
import { IGifflarContract } from "@managing/gifflarContract/types/IGifflarContract";
import { IImport } from "@models/directives/import/types/IImport";
import { Contract } from "web3-eth-contract";
import { IDirective } from "./IDirective";
import { IManagerDeployDTO } from "./IManagerDeployDTO";

export interface IGifflarManager {
  getCode(): string;
  getCompiledJson(): any;
  newImport(identifierPath: string, alias?: string): IImport;
  newContract(name: string): IGifflarContract;
  getContract(name: string): IGifflarContract;
  getImports(): Array<IImport>;
  getAllDirectives(): Array<IDirective>;
  writeAll(): string;
  write(directives: Array<IDirective>): string;
  written(): string | undefined;
  compileAll(callback: (errors: Array<any>) => void): any;
  compile(contractName: string, callback: (errors: Array<any>) => void): void;
  deploy(
    contractName: string,
    inputs: IManagerDeployDTO,
    accountPrivateKey?: string
  ): Promise<Contract>;
  setWeb3(newWeb3: IWeb3): IWeb3;
  getWeb3(): IWeb3 | undefined | null;
}
