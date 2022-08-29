import { IContractBodyItem } from "../../../../models/toplevels/contractBody/types/IContractBodyItem";
import { ICustomErrorWriter } from "../../../definitions/customErrorWriter/types/ICustomErrorWriter";
import { IEventWriter } from "../../../definitions/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "../../../definitions/functionWriter/types/IFunctionWriter";
import { IModifierWriter } from "../../../definitions/modifierWriter/types/IModifierWriter";
import { IStateMappingWriter } from "../../../definitions/stateMappingWriter/types/IStateMappingWriter";
import { IStateVariableWriter } from "../../../definitions/stateVariableWriter/types/IStateVariableWriter";
import { IUsingWriter } from "../../../definitions/usingWriter/types/IUsingWriter";
import { IContractBodyWriter } from "../types/IContractBodyWriter";
declare class ContractBodyWriter implements IContractBodyWriter {
    private eventWriter;
    private functionWriter;
    private stateVariableWriter;
    private modifierWriter;
    private customErrorWriter;
    private stateMappingWriter;
    private usingWriter;
    constructor(eventWriter: IEventWriter, functionWriter: IFunctionWriter, stateVariableWriter: IStateVariableWriter, modifierWriter: IModifierWriter, customErrorWriter: ICustomErrorWriter, stateMappingWriter: IStateMappingWriter, usingWriter: IUsingWriter);
    write(bodyItem: IContractBodyItem): string;
}
export default ContractBodyWriter;
