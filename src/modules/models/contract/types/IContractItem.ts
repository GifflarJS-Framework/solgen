import { ICustomError } from "@models/customError/types/ICustomError";
import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IGlobalMapping } from "@models/globalMapping/types/IGlobalMapping";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IModifier } from "@models/modifier/types/IModifier";

export interface IContractItem {
  variables: Array<IGlobalVariable>;
  mappings: Array<IGlobalMapping>;
  events: Array<IEvent>;
  modifiers: Array<IModifier>;
  customErrors: Array<ICustomError>;
  functions: Array<IFunction>;
}
