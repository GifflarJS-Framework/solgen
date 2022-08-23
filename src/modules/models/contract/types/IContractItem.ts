import { ICustomError } from "@models/customError/types/ICustomError";
import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IStateMapping } from "@models/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IModifier } from "@models/modifier/types/IModifier";
import { IInherits } from "@models/inherits/types/IInherits";

export interface IContractItem {
  name: string;
  inherits: Array<IInherits>;
  variables: Array<IStateVariable>;
  mappings: Array<IStateMapping>;
  events: Array<IEvent>;
  modifiers: Array<IModifier>;
  customErrors: Array<ICustomError>;
  functions: Array<IFunction>;
}
