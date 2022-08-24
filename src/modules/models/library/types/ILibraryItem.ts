import { ICustomError } from "@models/customError/types/ICustomError";
import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IModifier } from "@models/modifier/types/IModifier";
import { IStateMapping } from "@models/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";

export interface ILibraryItem {
  name: string;
  variables: Array<IStateVariable>;
  mappings: Array<IStateMapping>;
  events: Array<IEvent>;
  modifiers: Array<IModifier>;
  customErrors: Array<ICustomError>;
  functions: Array<IFunction>;
}