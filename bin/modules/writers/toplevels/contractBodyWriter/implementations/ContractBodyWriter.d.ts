import { IContractBodyItem } from "../../../../models/toplevels/contractBody/types/IContractBodyItem";
import { ICustomCodeWriter } from "../../../custom/customCodeWriter/types/ICustomCodeWriter";
import { IEnumWriter } from "../../../definitions/enumWriter/types/IEnumWriter";
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
    private stateMappingWriter;
    private usingWriter;
    private enumWriter;
    private customCodeWriter;
    constructor(eventWriter: IEventWriter, functionWriter: IFunctionWriter, stateVariableWriter: IStateVariableWriter, modifierWriter: IModifierWriter, stateMappingWriter: IStateMappingWriter, usingWriter: IUsingWriter, enumWriter: IEnumWriter, customCodeWriter: ICustomCodeWriter);
    write(bodyItem: IContractBodyItem): string;
}
export default ContractBodyWriter;
