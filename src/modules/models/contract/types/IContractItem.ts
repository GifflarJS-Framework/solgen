import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IModifier } from "@models/modifier/types/IModifier";

export interface IContractItem {
  variables: Array<IGlobalVariable>;
  events: Array<IEvent>;
  modifiers: Array<IModifier>;
  functions: Array<IFunction>;
}
