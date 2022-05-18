import { IEvent } from "../../event/types/IEvent";
import { IFunction } from "../../function/types/IFunction";
import { IGlobalVariable } from "../../globalVariable/types/IGlobalVariable";
export interface IContractItem {
    variables: Array<IGlobalVariable>;
    events: Array<IEvent>;
    functions: Array<IFunction>;
}
