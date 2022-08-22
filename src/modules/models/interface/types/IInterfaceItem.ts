import { ICustomError } from "@models/customError/types/ICustomError";
import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IModifier } from "@models/modifier/types/IModifier";

export interface IInterfaceItem {
  name: string;
  events: Array<IEvent>;
  modifiers: Array<IModifier>;
  customErrors: Array<ICustomError>;
  functions: Array<IFunction>;
}
