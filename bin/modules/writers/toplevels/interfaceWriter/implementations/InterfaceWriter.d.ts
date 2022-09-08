import { IInterfaceJson } from "../../../../models/toplevels/interface/types/IInterfaceJson";
import { IEventWriter } from "../../../definitions/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "../../../definitions/functionWriter/types/IFunctionWriter";
import { IInheritsWriter } from "../../inheritsWriter/types/IInheritsWriter";
import { IModifierWriter } from "../../../definitions/modifierWriter/types/IModifierWriter";
import { IInterfaceWriter } from "../types/IInterfaceWriter";
declare class InterfaceWriter implements IInterfaceWriter {
    private eventWriter;
    private modifierWriter;
    private functionWriter;
    private inheritsWriter;
    constructor(eventWriter: IEventWriter, modifierWriter: IModifierWriter, functionWriter: IFunctionWriter, inheritsWriter: IInheritsWriter);
    write(interfaces: Array<IInterfaceJson>, 
    /** To get every interface text individually. */
    callback?: (individualInterfaceText: string, index: number) => void): string;
}
export default InterfaceWriter;
