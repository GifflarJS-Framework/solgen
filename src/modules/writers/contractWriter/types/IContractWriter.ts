import { IContract } from "@models/contract/types/IContract";

export interface IContractWriter {
  write(
    contracts: Array<IContract>,
    callback: (versionPlusContractText: string, index: number) => void
  ): string;
}
