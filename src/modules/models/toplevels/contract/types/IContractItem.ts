import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IUsing } from "@models/definitions/using/types/IUsing";

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
