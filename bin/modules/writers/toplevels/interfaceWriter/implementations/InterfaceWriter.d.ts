import { IInterfaceJson } from "../../../../models/toplevels/interface/types/IInterfaceJson";
import { ICustomErrorWriter } from "../../../definitions/customErrorWriter/types/ICustomErrorWriter";
import { IEventWriter } from "../../../definitions/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "../../../definitions/functionWriter/types/IFunctionWriter";
import { IInheritsWriter } from "../../inheritsWriter/types/IInheritsWriter";
import { IModifierWriter } from "../../../definitions/modifierWriter/types/IModifierWriter";
import { IInterfaceWriter } from "../types/IInterfaceWriter";
declare class InterfaceWriter implements IInterfaceWriter {
    private eventWriter;
    private modifierWriter;
    private customErrorWriter;
    private functionWriter;
    private inheritsWriter;
    constructor(eventWriter: IEventWriter, modifierWriter: IModifierWriter, customErrorWriter: ICustomErrorWriter, functionWriter: IFunctionWriter, inheritsWriter: IInheritsWriter);
    write(interfaces: Array<IInterfaceJson>, 
    /** To get every interface text individually. */
    callback?: (individualInterfaceText: string, index: number) => void): string;
}
export default InterfaceWriter;
