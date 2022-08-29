import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IUsing } from "@models/definitions/using/types/IUsing";

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
