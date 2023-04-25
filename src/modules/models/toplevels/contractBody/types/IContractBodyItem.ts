import { IEnum } from "@models/definitions/enum/types/IEnum";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IStruct } from "@models/definitions/struct/types/IStruct";
import { IUsing } from "@models/definitions/using/types/IUsing";
import { ICustomCode } from "@modules/models/custom/customCode/types/ICustomCode";

export interface IContractBodyItem {
  usings?: Array<IUsing>;
  structs?: Array<IStruct>;
  enums?: Array<IEnum>;
  variables?: Array<IStateVariable>;
  mappings?: Array<IStateMapping>;
  events?: Array<IEvent>;
  modifiers?: Array<IModifier>;
  customCodes?: Array<ICustomCode>;
  // customErrors?: Array<ICustomError>;
  functions?: Array<IFunction>;
}
