import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInherits } from "@models/directives/inherits/types/IInherits";
import { IModifier } from "@models/definitions/modifier/types/IModifier";

export interface IInterfaceItem {
  name: string;
  inherits: Array<IInherits>;
  events: Array<IEvent>;
  modifiers: Array<IModifier>;
  customErrors: Array<ICustomError>;
  functions: Array<IFunction>;
}
