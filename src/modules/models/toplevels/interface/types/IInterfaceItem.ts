import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IEnum } from "@models/definitions/enum/types/IEnum";

export interface IInterfaceItem {
  name: string;
  enums?: Array<IEnum>;
  inherits?: Array<IInherits>;
  events?: Array<IEvent>;
  modifiers?: Array<IModifier>;
  // customErrors?: Array<ICustomError>;
  functions?: Array<IFunction>;
}
