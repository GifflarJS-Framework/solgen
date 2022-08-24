import { ICustomError } from "@models/customError/types/ICustomError";
import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IModifier } from "@models/modifier/types/IModifier";
import { IStateMapping } from "@models/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IUsing } from "@models/using/types/IUsing";

export interface ILibraryItem {
  name: string;
  usings: Array<IUsing>;
  variables: Array<IStateVariable>;
  mappings: Array<IStateMapping>;
  events: Array<IEvent>;
  modifiers: Array<IModifier>;
  customErrors: Array<ICustomError>;
  functions: Array<IFunction>;
}
