import { ICustomError } from "../../../definitions/customError/types/ICustomError";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IStateMapping } from "../../../definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { IModifier } from "../../../definitions/modifier/types/IModifier";
import { IInherits } from "../../inherits/types/IInherits";
import { IUsing } from "../../../definitions/using/types/IUsing";
export interface IContractItem {
    name: string;
    inherits: Array<IInherits>;
    usings: Array<IUsing>;
    variables: Array<IStateVariable>;
    mappings: Array<IStateMapping>;
    events: Array<IEvent>;
    modifiers: Array<IModifier>;
    customErrors: Array<ICustomError>;
    functions: Array<IFunction>;
}
