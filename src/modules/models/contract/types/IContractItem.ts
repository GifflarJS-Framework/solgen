import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";

export interface IContractItem {
  variables: Array<IGlobalVariable>;
  events: Array<IEvent>;
  functions: Array<IFunction>;
}
