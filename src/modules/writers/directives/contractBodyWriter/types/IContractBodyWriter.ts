import { IContractBodyItem } from "@models/directives/contractBody/types/IContractBodyItem";

export interface IContractBodyWriter {
  write(bodyItems: IContractBodyItem): string;
}
