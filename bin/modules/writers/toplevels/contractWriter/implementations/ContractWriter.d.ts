import { IContractJson } from "../../../../models/toplevels/contract/types/IContractJson";
import { IContractWriter } from "../types/IContractWriter";
import { IContractBodyWriter } from "../../contractBodyWriter/types/IContractBodyWriter";
import { IInheritsWriter } from "../../inheritsWriter/types/IInheritsWriter";
declare class ContractWriter implements IContractWriter {
    private contractBodyWriter;
    private inheritsWriter;
    constructor(contractBodyWriter: IContractBodyWriter, inheritsWriter: IInheritsWriter);
    write(contracts: Array<IContractJson>, 
    /** To get every contract text individually. */
    callback?: (individualContractText: string, index: number) => void): string;
}
export default ContractWriter;
