import { IContractBodyItem } from "../../../../models/toplevels/contractBody/types/IContractBodyItem";
export interface IContractBodyWriter {
    write(bodyItems: IContractBodyItem): string;
}
