import { IEvent } from "../../event/types/IEvent";
import { IEventCall } from "../../eventCall/types/IEventCall";
import { IFunction } from "../../function/types/IFunction";
import { IInput } from "../../function/types/IInput";
import { IGlobalVariable } from "../../globalVariable/types/IGlobalVariable";
import { IContractJson } from "./IContractJson";
export interface IContract extends IContractJson {
    toJson(): IContractJson;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createEventCall(name: string, variables: Array<string>): IEventCall;
    createVariable(type: string, name: string, scope: string, value?: string): IGlobalVariable;
    createConstructor(scope: string, inputs?: Array<IInput>, outputs?: Array<string>): IFunction;
    createFunction(name: string, scope: string, inputs?: Array<IInput>, outputs?: Array<string>): IFunction;
    toString(): string;
}
