import { ICustomError } from "../../../definitions/customError/types/ICustomError";
import { IEnum } from "../../../definitions/enum/types/IEnum";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IModifier } from "../../../definitions/modifier/types/IModifier";
import { IStateMapping } from "../../../definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { IStruct } from "../../../definitions/struct/types/IStruct";
import { IUsing } from "../../../definitions/using/types/IUsing";
export interface IContractBodyItem {
    usings?: Array<IUsing>;
    structs?: Array<IStruct>;
    enums?: Array<IEnum>;
    variables?: Array<IStateVariable>;
    mappings?: Array<IStateMapping>;
    events?: Array<IEvent>;
    modifiers?: Array<IModifier>;
    customErrors?: Array<ICustomError>;
    functions?: Array<IFunction>;
}
