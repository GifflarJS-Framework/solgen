import { IEventCall } from "../../eventCall/types/IEventCall";
import { IFunction } from "../../function/types/IFunction";
export interface IRequest {
    functions: Array<IFunction>;
    events: Array<IEventCall>;
    text_returns: string;
}
