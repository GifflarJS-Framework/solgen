import { ICustomError } from "../../../definitions/customError/types/ICustomError";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInherits } from "../../inherits/types/IInherits";
import { IModifier } from "../../../definitions/modifier/types/IModifier";
export interface IInterfaceItem {
    name: string;
    inherits: Array<IInherits>;
    events: Array<IEvent>;
    modifiers: Array<IModifier>;
    customErrors: Array<ICustomError>;
    functions: Array<IFunction>;
}
