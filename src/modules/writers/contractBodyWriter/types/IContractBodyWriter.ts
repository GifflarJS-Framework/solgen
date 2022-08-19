import { IContractBodyItem } from "@models/contractBody/types/IContractBodyItem";

export interface IContractBodyWriter {
  write(bodyItems: IContractBodyItem): string;
}
