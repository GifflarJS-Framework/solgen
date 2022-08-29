import { IWeb3 } from "../../../deployer/types/IWeb3";
import { IContract } from "../../../models/toplevels/contract/types/IContract";
import { IContractJson } from "../../../models/toplevels/contract/types/IContractJson";
import { IImport } from "../../../models/toplevels/import/types/IImport";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "./IContractDeployDTO";
export interface IGifflarContract extends IContract {
    setName(newName: string): void;
    getName(): string;
    setImport(identifierPath: string, alias?: string): IImport;
    write(contracts?: Array<IContractJson>): string;
    compile(callback: (errors: any) => void): any;
    deploy(inputs: IContractDeployDTO, accountPrivateKey?: string, web3?: IWeb3): Promise<Contract>;
    written(): string | undefined;
    compiled(): any | undefined;
    setWeb3(web3: IWeb3): void;
    deployed(): Contract | undefined;
}
