import { IContractJson } from "../../../../models/toplevels/contract/types/IContractJson";
export interface IContractWriter {
    write(contracts: Array<IContractJson>, callback?: (versionPlusContractText: string, index: number) => void): string;
}
