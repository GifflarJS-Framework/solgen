import { IContractJson } from "../../../models/contract/types/IContractJson";
import { IEventWriter } from "../../eventWriter/types/IEventWriter";
import { IFunctionWriter } from "../../functionWriter/types/IFunctionWriter";
import { IGlobalVariableWriter } from "../../globalVariableWriter/types/IGlobalVariableWriter";
import { IContractWriter } from "../types/IContractWriter";
declare class ContractWriter implements IContractWriter {
    private eventWriter;
    private functionWriter;
    private globalVariableWriter;
    constructor(eventWriter: IEventWriter, functionWriter: IFunctionWriter, globalVariableWriter: IGlobalVariableWriter);
    private _start;
    private _close;
    write(contracts: Array<IContractJson>, callback: (versionPlusContractText: string, index: number) => void): string;
}
export default ContractWriter;
