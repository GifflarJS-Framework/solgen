import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { IEnum } from "@models/definitions/enum/types/IEnum";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IStruct } from "@models/definitions/struct/types/IStruct";
import { IUsing } from "@models/definitions/using/types/IUsing";

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
